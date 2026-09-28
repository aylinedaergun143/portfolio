# Aylin Eda Ergün — Portfolio

A dependency-free static portfolio built with semantic HTML, CSS, and vanilla JavaScript. The production website and all required assets live in `dist/`.

## Requirements

- Python 3 for local preview and production validation
- Git for version control

No package manager, dependency installation, environment variables, or secrets are required.

## Local development

```sh
python3 -m http.server 3000 --directory dist
```

Open port `3000` in a browser. Stop the server with `Ctrl+C`.

Do not use `dist/index.html` as a standalone filesystem page. The site uses
web-root routes and must be served over HTTP. A shared preview guard replaces
accidental filesystem openings with a clear instruction instead of showing an
unstyled copy of the portfolio.

## Production validation

```sh
python3 scripts/build.py
```

The command checks every route, internal link, asset, anchor, CSS reference, filename case, and local-machine path. The validated production output remains `dist/`; this static site does not require compilation.

## Production preview

```sh
python3 -m http.server 3000 --directory dist
```

## Deployment

Connect the repository to a Git-based static hosting service. For Vercel, the included `vercel.json` selects `dist/` as the output directory. No install or build command is required by the hosting platform; `python3 scripts/build.py` can be used as a pre-deployment check.

For the first GitHub upload, create an empty repository, add it as this local
repository's remote, make the initial commit, and push the `main` branch. Then
import that GitHub repository into Vercel. Keep the framework preset as
`Other`, leave the install and build commands empty, and use `dist` as the
output directory.
