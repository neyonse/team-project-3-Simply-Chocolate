(() => {
  const mobileMenu = document.querySelector('.js-thank');
  const openMenuBtn = document.querySelector('.js-open-modal-thank');
  const closeMenuBtn = document.querySelector('.js-close-modal-thank');
  const buyModal = document.querySelector('.js-buy-now');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;

    buyModal.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    document.body.classList.remove('no-scroll');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  // buyModal.remove.classList('is-open');

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 320px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
