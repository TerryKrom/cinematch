const API_KEY = '12a3c56c';
const cardsContainer = document.querySelector('#movie-list');
const cardsTop = document.querySelector('#movie-search')
let i = 0;
const showMovies = (query, space, qtd) => {
  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&type=movie&plot=full&page=1`)
.then(response => response.json())
  .then(data => {
    if (Array.isArray(data.Search)) {
      data.Search.slice(0,qtd).forEach(movie => {
        const card = document.createElement('div');
        card.className = 'card col-12 col-sm-12 col-md-3 col-lg-3';
        
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
        
        const heartIcon = `<svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill heart-icon" viewBox="0 0 16 16" id=${i}>
        <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
      `;
        cardBody.innerHTML+=heartIcon
        space.appendChild(card);
        i++
      });
    } else {
      console.log(`No movies found for query: ${query}`);
    }
  })
  .catch(error => console.error(error));

  
}

const mTitlesP = [
  'Godfather',
  'Avatar',
  'Avengers',
  'Fast And Furious',
  'Thor',
  'Elite Squad',
  'John Wick'
];

const mTitlesS = [
  'Creed III',
  'Rocky IV',
  'Joker',
  'Black Panther',
  'titanic'
];

let indices = [];

const randMovie = (arr) => {
  if (indices.length >= arr.length) {
    indices = [];
  }

  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * arr.length);
  } while (indices.includes(randomIndex));

  indices.push(randomIndex);

  return arr[randomIndex];
};

showMovies(randMovie(mTitlesP), cardsContainer, 2);
showMovies(randMovie(mTitlesP), cardsContainer, 2);
showMovies(randMovie(mTitlesP), cardsContainer, 2)
showMovies(randMovie(mTitlesS), cardsContainer, 1);
showMovies(randMovie(mTitlesS), cardsContainer, 1);
showMovies(randMovie(mTitlesP), cardsContainer, 2);
showMovies(randMovie(mTitlesS), cardsContainer, 1);
showMovies(randMovie(mTitlesS), cardsContainer, 1);

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
