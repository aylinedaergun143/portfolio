(function () {
  var root = document.documentElement;
  root.classList.add('scroll-reveal-enabled');

  function revealAll(targets) {
    targets.forEach(function (target) {
      target.classList.add('is-revealed');
    });
  }

  function initializeScrollReveal() {
    var targets = Array.prototype.slice.call(
      document.querySelectorAll('[data-scroll-reveal]')
    );

    if (!targets.length) return;

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealAll(targets);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });

    targets.forEach(function (target) {
      observer.observe(target);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeScrollReveal, { once: true });
  } else {
    initializeScrollReveal();
  }
}());
