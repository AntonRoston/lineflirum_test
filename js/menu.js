(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const closebyLink = document.querySelectorAll('.menu__link');

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");


    const closeMenu = () => {
      menuBtnRef.classList.remove('is-open');
      mobileMenuRef.classList.remove('is-open');
      menuBtnRef.setAttribute('aria-expanded', false);
     };
    
      mobileMenuRef.addEventListener('click', menuBtnRef);
    closebyLink.forEach(b => b.addEventListener('click', closeMenu));
    

  });
})();