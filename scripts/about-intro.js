(() => {
  const slideshow = document.querySelector('.about-slideshow');
  if (!slideshow) return;

  const slides = [...slideshow.querySelectorAll('.about-slide')];
  if (slides.length < 2) return;

  let activeIndex = 0;
  let topLayer = 1;

  window.setInterval(() => {
    const currentSlide = slides[activeIndex];
    activeIndex = (activeIndex + 1) % slides.length;
    const nextSlide = slides[activeIndex];

    topLayer += 1;
    nextSlide.style.zIndex = String(topLayer);
    nextSlide.classList.add('is-active');
    currentSlide.classList.remove('is-active');
  }, 5000);
})();
