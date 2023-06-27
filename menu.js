const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.querySelector('nav ul');
const menuHide = document.querySelector('.menu-hide')
burgerMenu.addEventListener('click', () => {
  menuHide.classList.toggle('open')
  navLinks.classList.toggle('open');
  burgerMenu.classList.toggle('open');
  menu.style.display=0;
});
