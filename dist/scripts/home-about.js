(() => {
  const stack = document.querySelector('.home-photo-stack');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (stack) {
    const photos = [...stack.querySelectorAll('.home-photo')];
    let activeIndex = 0;
    let topLayer = photos.length;
    let cycleTimer;
    let nextChangeAt;

    document.documentElement.classList.add('home-about-stack-enabled');
    photos.forEach((photo, index) => {
      photo.style.zIndex = String(photos.length - index);
    });

    const showNextPhoto = () => {
      activeIndex = (activeIndex + 1) % photos.length;
      const photo = photos[activeIndex];
      topLayer += 1;
      photo.style.zIndex = String(topLayer);
      photo.style.transitionDelay = '0ms';
      photo.classList.add('is-entering');
      photo.getBoundingClientRect();
      requestAnimationFrame(() => photo.classList.remove('is-entering'));
    };

    const scheduleNextPhoto = () => {
      nextChangeAt = Date.now() + 2000;

      const runCycle = () => {
        const remaining = nextChangeAt - Date.now();

        if (remaining > 20) {
          cycleTimer = window.setTimeout(runCycle, remaining);
          return;
        }

        if (!document.hidden) showNextPhoto();
        scheduleNextPhoto();
      };

      cycleTimer = window.setTimeout(runCycle, 2000);
    };

    const revealStack = () => {
      stack.classList.add('is-stacked');
      if (!reducedMotion && !cycleTimer) scheduleNextPhoto();
    };

    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealStack();
    } else {
      const stackObserver = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        revealStack();
        stackObserver.disconnect();
      }, { threshold: 0.28 });

      stackObserver.observe(stack);
    }
  }

})();
