(() => {
  const mobileMenu = document.querySelector('.js-feedback');
  const openMenuBtn = document.querySelector('.js-open-feedback');
  const closeMenuBtn = document.querySelector('.js-close-feedback');
  const reviewModal = document.querySelector('.js-review');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    reviewModal.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    document.body.classList.remove('no-scroll');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
