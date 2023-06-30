const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.querySelector('nav ul');
const menuHide = document.querySelector('.menu-hide')
const menu = document.querySelector('.menu-perfil')
const showOutMenu = () => {
  if(localStorage.length != 0){
    menu.style.opacity=1;
    menuHide.classList.remove('open')
    navLinks.classList.remove('open');
    burgerMenu.classList.remove('open');
  }
}
const removeMenu = () => {
  menu.style.opacity=0;
}

burgerMenu.addEventListener('click', () => {
  menuHide.classList.toggle('open')
  navLinks.classList.toggle('open');
  burgerMenu.classList.toggle('open');
  removeMenu();
});
