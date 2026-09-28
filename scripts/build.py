#!/usr/bin/env python3
"""Validate the dependency-free static production site in dist/."""

from __future__ import annotations

import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "dist"
REQUIRED_ROUTES = (
    "index.html",
    "about/index.html",
    "work/commencium/index.html",
    "work/stitch/index.html",
    "work/pingu/index.html",
    "work/pinty/index.html",
    "work/bank-of-trust/index.html",
)
TEXT_SUFFIXES = {".html", ".css", ".js", ".json", ".md", ".txt"}
FORBIDDEN_REFERENCES = (
    "/" + "Users/",
    "file" + "://",
    "local" + "host",
    "127" + ".0.0.1",
)
CSS_URL = re.compile(r"url\(\s*(['\"]?)(.*?)\1\s*\)", re.IGNORECASE)


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.references: list[tuple[str, str]] = []
        self.ids: set[str] = set()

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if values.get("id"):
            self.ids.add(values["id"] or "")
        for attribute in ("href", "src"):
            if values.get(attribute):
                self.references.append((attribute, values[attribute] or ""))


def has_exact_case(path: Path) -> bool:
    try:
        relative = path.resolve().relative_to(SITE.resolve())
    except (ValueError, FileNotFoundError):
        return False

    current = SITE
    for part in relative.parts:
        try:
            names = {entry.name for entry in current.iterdir()}
        except OSError:
            return False
        if part not in names:
            return False
        current = current / part
    return True


def local_target(source: Path, raw_url: str) -> tuple[Path | None, str]:
    if raw_url.startswith("//"):
        return None, ""

    parsed = urlsplit(raw_url)
    if parsed.scheme or parsed.netloc:
        return None, ""

    path_value = unquote(parsed.path)
    if not path_value:
        return source, parsed.fragment

    if path_value.startswith("/"):
        target = SITE / path_value.lstrip("/")
    else:
        target = source.parent / path_value

    if path_value.endswith("/"):
        target = target / "index.html"

    return target, parsed.fragment


def css_structure_error(content: str) -> str | None:
    """Return a structural CSS error while ignoring strings and comments."""
    depth = 0
    quote: str | None = None
    in_comment = False
    index = 0

    while index < len(content):
        char = content[index]
        following = content[index + 1] if index + 1 < len(content) else ""

        if in_comment:
            if char == "*" and following == "/":
                in_comment = False
                index += 1
        elif quote:
            if char == "\\":
                index += 1
            elif char == quote:
                quote = None
        elif char == "/" and following == "*":
            in_comment = True
            index += 1
        elif char in ("'", '"'):
            quote = char
        elif char == "{":
            depth += 1
        elif char == "}":
            depth -= 1
            if depth < 0:
                return "unexpected closing brace"

        index += 1

    if in_comment:
        return "unclosed comment"
    if quote:
        return "unclosed string"
    if depth:
        return f"unbalanced block depth ({depth})"
    return None


def main() -> int:
    errors: list[str] = []
    parsed_pages: dict[Path, PageParser] = {}

    if not SITE.is_dir():
        errors.append("Missing production directory: dist/")

    for route in REQUIRED_ROUTES:
        page = SITE / route
        if not page.is_file():
            errors.append(f"Missing required route: {route}")

    for page in sorted(SITE.rglob("*.html")):
        parser = PageParser()
        try:
            parser.feed(page.read_text(encoding="utf-8"))
        except (OSError, UnicodeError) as exc:
            errors.append(f"Cannot parse {page.relative_to(ROOT)}: {exc}")
            continue
        parsed_pages[page.resolve()] = parser

    for page, parser in parsed_pages.items():
        preview_imports = [
            raw_url
            for attribute, raw_url in parser.references
            if attribute == "src" and urlsplit(raw_url).path.endswith("file-preview.js")
        ]
        if len(preview_imports) != 1:
            errors.append(
                f"Expected one file-preview guard in {page.relative_to(ROOT)}, "
                f"found {len(preview_imports)}"
            )

        for attribute, raw_url in parser.references:
            target, fragment = local_target(page, raw_url)
            if target is None:
                continue

            target = target.resolve()
            if target.is_dir():
                target = target / "index.html"

            if not target.is_file():
                errors.append(
                    f"Broken {attribute} in {page.relative_to(ROOT)}: {raw_url}"
                )
                continue

            if not has_exact_case(target):
                errors.append(
                    f"Case mismatch in {page.relative_to(ROOT)}: {raw_url}"
                )

            if fragment and target.suffix.lower() == ".html":
                target_parser = parsed_pages.get(target.resolve())
                if target_parser and fragment not in target_parser.ids:
                    errors.append(
                        f"Missing anchor #{fragment} in {target.relative_to(ROOT)} "
                        f"(linked from {page.relative_to(ROOT)})"
                    )

    for stylesheet in sorted(SITE.rglob("*.css")):
        content = stylesheet.read_text(encoding="utf-8")
        structure_error = css_structure_error(content)
        if structure_error:
            errors.append(
                f"Malformed CSS in {stylesheet.relative_to(ROOT)}: {structure_error}"
            )
        for match in CSS_URL.finditer(content):
            raw_url = match.group(2).strip()
            target, _ = local_target(stylesheet, raw_url)
            if target is None:
                continue
            target = target.resolve()
            if not target.is_file():
                errors.append(
                    f"Broken CSS asset in {stylesheet.relative_to(ROOT)}: {raw_url}"
                )
            elif not has_exact_case(target):
                errors.append(
                    f"CSS asset case mismatch in {stylesheet.relative_to(ROOT)}: {raw_url}"
                )

    for path in sorted(SITE.rglob("*")):
        if not path.is_file() or path.suffix.lower() not in TEXT_SUFFIXES:
            continue
        content = path.read_text(encoding="utf-8", errors="replace")
        for forbidden in FORBIDDEN_REFERENCES:
            if forbidden in content:
                errors.append(
                    f"Local-machine reference {forbidden!r} in {path.relative_to(ROOT)}"
                )

    if errors:
        print("Production validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    asset_count = sum(1 for path in (SITE / "projects").rglob("*") if path.is_file())
    print(
        f"Production validation passed: {len(parsed_pages)} pages, "
        f"{asset_count} project assets, exact-case paths, guarded file previews, "
        "and no unintended local-machine references."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
