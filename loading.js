let page = document.getElementById('page')
let animation = document.getElementById('animation')
let l_img = document.getElementById('load-img')
let h1Element = document.getElementById('load-text')
  

document.addEventListener("DOMContentLoaded", function() {
    animation.classList.remove('d-flex');
    animation.style.display='none';
    page.style.animation='opening 4.5s linear;'
    page.style.animationDelay='5s';
    setTimeout(function(){
        animation.classList.remove('d-flex');
        animation.style.display='none';
        page.classList.add('loaded-page')
        desbloquearScroll()
    }, 5000)
    if (!localStorage.getItem("animationPlayed")) {
      // Executar animação apenas se ainda não foi executada
      const animationElement = document.querySelector(".animation");
      // Adicione suas animações personalizadas aqui
      animationElement.classList.toggle("play-animation");

      h1Element.classList.toggle("play-animation2");
  
      // Defina o valor no localStorage indicando que a animação foi executada
      localStorage.setItem("animationPlayed", true);
    }
    if (localStorage.getItem("animationPlayed")) {
        page.classList.add('loaded-page')
        desbloquearScroll()
    }
});

const bloquearScroll = () => {
    // Obtém a posição atual do scroll
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
    // Bloqueia o scroll definindo a posição atual como fixa
    document.body.style.overflow = 'hidden';
    document.body.style.top = `-${scrollTop}px`;
    document.body.style.left = `-${scrollLeft}px`;
  }
  
const desbloquearScroll = () => {
    // Obtém a posição anterior do scroll
    var scrollTop = parseInt(document.body.style.top || '0');
    var scrollLeft = parseInt(document.body.style.left || '0');
  
    // Desbloqueia o scroll restaurando a posição anterior
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
  
    window.scrollTo(scrollLeft, scrollTop);
}
