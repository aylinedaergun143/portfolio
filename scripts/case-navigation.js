(() => {
  const nav = document.querySelector('.case-nav');
  const navInner = nav?.querySelector('.case-nav-inner');
  const links = [...(nav?.querySelectorAll('a[href^="#"]') || [])];
  const sections = links
    .map((link) => document.getElementById(link.hash.slice(1)))
    .filter(Boolean);

  if (!nav || !navInner || !links.length || !sections.length) return;

  let activeId = '';
  let ticking = false;

  const setActive = (id) => {
    if (!id || id === activeId) return;
    activeId = id;

    links.forEach((link) => {
      const isActive = link.hash === `#${id}`;
      link.classList.toggle('is-active', isActive);
      if (isActive) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });

    if (window.matchMedia('(max-width: 1100px)').matches) {
      const activeLink = links.find((link) => link.hash === `#${id}`);
      if (activeLink) {
        navInner.scrollTo({
          left: activeLink.offsetLeft - (navInner.clientWidth - activeLink.offsetWidth) / 2,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
        });
      }
    }
  };

  const updateActive = () => {
    const header = document.querySelector('.case-site-header');
    const compactNav = window.matchMedia('(max-width: 1100px)').matches;
    const offset = (header?.offsetHeight || 0) + (compactNav ? nav.offsetHeight : 36) + 48;
    let current = sections[0];

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) current = section;
      else break;
    }

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      current = sections[sections.length - 1];
    }

    setActive(current.id);
    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateActive);
  };

  links.forEach((link) => link.addEventListener('click', () => setActive(link.hash.slice(1))));
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate, { passive: true });
  window.addEventListener('hashchange', requestUpdate);
  requestUpdate();
})();
