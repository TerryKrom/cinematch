const API_KEY = '12a3c56c';
const cardsContainer = document.querySelector('#movie-list');
const cardsTop = document.querySelector('#movie-search')
let i = 0;
const showMovies = (query, space, qtd) => {
  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&type=movie&plot=full&page=1`)
.then(response => response.json())
  .then(data => {
    if (Array.isArray(data.Search)) {
      data.Search.slice(0,qtd).forEach(movie => {
        const card = document.createElement('div');
        card.className = 'card col-12 col-sm-6 col-md-3 col-lg-3';
        
        const poster = document.createElement('img');
        poster.src = movie.Poster;
        card.appendChild(poster);
        
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        card.appendChild(cardBody);
        
        const title = document.createElement('h2');
        title.className = 'card-title';
        title.textContent = movie.Title;
        cardBody.appendChild(title);
        
        const rating = document.createElement('p');
        rating.className = 'card-rating';
        rating.textContent = movie.imdbRating ? `Rating: ${movie.imdbRating}` : 'No rating available';
        cardBody.appendChild(rating);
        
        const heartIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16" id=${i}>
        <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
      `;
        // title.appendChild(heartIcon);
        title.innerHTML+=heartIcon
        space.appendChild(card);
        i++
      });
    } else {
      console.log(`No movies found for query: ${query}`);
    }
  })
  .catch(error => console.error(error));

  
}

showMovies('Godfather', cardsContainer, 2);
showMovies('Avatar', cardsContainer, 2);
showMovies('Avengers', cardsContainer, 2)
showMovies('Fast And Furious', cardsContainer, 2)
showMovies('Creed III', cardsContainer, 1);
showMovies('Rocky IV', cardsContainer, 1)
showMovies('Thor', cardsContainer, 2)

let menu = document.querySelector('.menu-perfil')
  
const showOutMenu = () => {
  if(localStorage.length != 0){
    menu.style.opacity=1;
  }
}
const removeMenu = () => {
  menu.style.opacity=0;
}

const btn_search = document.getElementById('btn-search')
const input_search = document.getElementById('search-input')

btn_search.addEventListener("click", function(){
  const query = input_search.value
  cardsTop.innerHTML=''
  showMovies(query, cardsTop, 4)
})

input_search.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Impede o comportamento padrão de enviar o formulário
    const query = input_search.value;
    cardsTop.innerHTML=''
    showMovies(query, cardsTop, 4);
  }
});
