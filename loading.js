window.addEventListener('load', function() {
    var loading = document.getElementById('loading');
    var content = document.getElementById('content');
  
    // Adiciona a classe "hidden" à div do conteúdo
    content.classList.add('hidden');
  
    // Remove a classe "hidden" quando o conteúdo estiver completamente carregado
    window.setTimeout(function() {
      loading.style.display = 'none';
      content.classList.remove('hidden');
      content.classList.add('visible');
    }, 2000); // Tempo de exibição do GIF de loading em milissegundos (aqui definido como 2 segundos)
  });
  let icon = document.getElementById('perfil')
  let a = document.getElementById('a-perfil')
  let out = document.querySelectorAll('.out')
        
        
if(localStorage.getItem('User') != null && localStorage.getItem('foto') == false){
    icon.src='perfil.png'
    icon.classList.toggle('logged');
      a.href='account.html'
      out.forEach(element => {
          element.style.display='flex';
          element.classList.toggle('insivible')
      })
}else if(localStorage.getItem('User') != null && localStorage.getItem('UserImg') != null){
    icon.src=localStorage.getItem('UserImg')
    icon.classList.toggle('logged');
      a.href='account.html'
      out.forEach(element => {
          element.style.display='flex';
          element.classList.toggle('insivible')

      })
}

if(localStorage.length == 0){
  out.forEach(element => {
    element.style.display='none'
    })
}
