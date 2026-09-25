(() => {
  if (window.location.protocol !== 'file:') return;

  const marker = '/dist/';
  const markerIndex = window.location.pathname.lastIndexOf(marker);
  if (markerIndex === -1) return;

  const root = new URL(window.location.href);
  root.pathname = window.location.pathname.slice(0, markerIndex + marker.length);
  root.search = '';
  root.hash = '';

  const fromRoot = (value) => {
    const [path, hash = ''] = value.slice(1).split('#');
    let target = path;

    if (!target) target = 'index.html';
    else if (target.endsWith('/')) target += 'index.html';

    const resolved = new URL(target, root);
    if (hash) resolved.hash = hash;
    return resolved.href;
  };

  const rewriteRootPaths = () => {
    document.querySelectorAll('[href^="/"], [src^="/"]').forEach((element) => {
      for (const attribute of ['href', 'src']) {
        const value = element.getAttribute(attribute);
        if (!value?.startsWith('/')) continue;
        element.setAttribute(attribute, fromRoot(value));
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', rewriteRootPaths, { once: true });
  } else {
    rewriteRootPaths();
  }
})();
