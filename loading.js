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
