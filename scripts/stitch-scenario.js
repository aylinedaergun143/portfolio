(function () {
  function initializeScenarioCarousel() {
    var carousel = document.querySelector('[data-scenario-carousel]');
    if (!carousel) return;

    var slides = Array.prototype.slice.call(carousel.querySelectorAll('.scenario-slide'));
    var previous = carousel.querySelector('[data-scenario-prev]');
    var next = carousel.querySelector('[data-scenario-next]');
    var count = carousel.querySelector('[data-scenario-count]');
    var markerContainer = carousel.querySelector('[data-scenario-markers]');
    var markers = [];
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var current = 0;
    var timer = null;
    var inView = false;
    var paused = false;

    function format(value) {
      return String(value).padStart(2, '0');
    }

    function render(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        var active = slideIndex === current;
        slide.toggleAttribute('data-active', active);
        slide.setAttribute('aria-hidden', active ? 'false' : 'true');
      });
      markers.forEach(function (marker, markerIndex) {
        marker.classList.toggle('is-past', markerIndex < current);
        marker.classList.toggle('is-active', markerIndex === current);
        if (markerIndex === current) marker.setAttribute('aria-current', 'step');
        else marker.removeAttribute('aria-current');
      });
      count.textContent = format(current + 1) + ' / ' + format(slides.length);
      carousel.style.setProperty('--scenario-progress', (current / (slides.length - 1) * 100) + '%');
    }

    function stop() {
      if (timer) window.clearInterval(timer);
      timer = null;
    }

    function start() {
      stop();
      if (reducedMotion || !inView || paused) return;
      timer = window.setInterval(function () {
        render(current + 1);
      }, 5500);
    }

    slides.forEach(function (slide, index) {
      var marker = document.createElement('button');
      marker.type = 'button';
      marker.className = 'scenario-marker';
      marker.setAttribute('aria-label', 'Show scenario step ' + format(index + 1) + ': ' + slide.querySelector('h3').textContent);
      marker.addEventListener('click', function () {
        render(index);
        start();
      });
      markerContainer.appendChild(marker);
      markers.push(marker);
    });

    previous.addEventListener('click', function () {
      render(current - 1);
      start();
    });

    next.addEventListener('click', function () {
      render(current + 1);
      start();
    });

    carousel.addEventListener('mouseenter', function () {
      paused = true;
      stop();
    });
    carousel.addEventListener('mouseleave', function () {
      paused = false;
      start();
    });
    carousel.addEventListener('focusin', function () {
      paused = true;
      stop();
    });
    carousel.addEventListener('focusout', function () {
      paused = false;
      start();
    });

    render(0);

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
        if (inView) start();
        else stop();
      }, { threshold: 0.35 });
      observer.observe(carousel);
    } else {
      inView = true;
      start();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeScenarioCarousel, { once: true });
  } else {
    initializeScenarioCarousel();
  }
}());
