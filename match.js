let genres = document.querySelectorAll('.genre');
let selectedGenres = [];
let matchQuery = [];
let res = document.getElementById('res')
let age = document.querySelectorAll('.age');
let selectedAge = '';
let clean = document.getElementById('limpar')
let titles = document.querySelectorAll('.titles')
let selectedTitles = []
let titlesLabel = document.getElementById('tlabel')
let titleDiv = document.querySelector('.tst')

const action = ['John Wick', 'The Equalizer', 'Rocky', 'The Expendables', "Angel has Fallen"]

const comedy = ['Anchorman', 'Superbad', 'Bridesmaids', 'The Hangover', 'Step Brothers', "Dirty Grandpa"];

const romance = ['Titanic', 'The Notebook', 'Romeo + Juliet', 'Pride and Prejudice', 'La La Land', 'The Fault in Our Stars'];

const horror = ['The Shining', 'Get Out', 'A Quiet Place', 'Hereditary', 'It', 'Paranormal Activity'];

const thriller = ['Inception', 'Gone Girl', 'The Silence of the Lambs', 'Memento', 'Shutter Island', 'Se7en'];

const fantasy = ['The Lord of the Rings', 'Harry Potter', 'Alice in Wonderland', 'Pan\'s Labyrinth', 'The Chronicles of Narnia', 'Stardust'];

const drama = ['The Shawshank Redemption', 'The Godfather', 'Forrest Gump', 'Schindler\'s List', 'Fight Club', 'The Pursuit of Happyness'];

const kids = ['Toy Story', 'Finding Nemo', 'The Lion King', 'Moana', 'Shrek', 'Frozen'];

const adventure = ['Indiana Jones', 'Jurassic Park', 'Pirates of the Caribbean', 'The Mummy', 'National Treasure', 'Jumanji'];

const musical = ['Grease', 'Les Misérables', 'Chicago', 'Moulin Rouge!', 'The Sound of Music', 'Hamilton'];



const alt_action = ['Die Hard', 'Mad Max: Fury Road', 'The Dark Knight', 'Mission: Impossible', 'Taken', 'Kill Bill'];

const alt_comedy = ["The 40-Year-Old Virgin", "Borat", "Talladega Nights: The Ballad of Ricky Bobby", "The Other Guys", "This Is the End", "The Nice Guys"];

const alt_romance = ["The Fault in Our Stars", "A Star is Born", "The Time Traveler's Wife", "The Vow", "Me Before You", "The Best of Me"];

const alt_horror = ['The Exorcist', 'The Shining', 'Halloween', 'Nightmare on Elm Street', 'The Texas Chainsaw Massacre', 'Psycho'];

const alt_thriller = ['The Departed', 'Zodiac', 'Prisoners', 'Gone Baby Gone', 'The Invisible Guest', 'The Prestige', 'The Talented Mr. Ripley', 'The Fugitive'];

const alt_fantasy = ['The Hobbit', 'Fantastic Beasts and Where to Find Them', 'The NeverEnding Story', 'The Dark Crystal', 'Willow', 'Avatar'];

const alt_drama = ['The Green Mile', 'The Pianist', 'The Curious Case of Benjamin Button', 'The Help', 'The Social Network'];

const alt_kids = ["Onward", "Soul", "Luca", "Raya and the Last Dragon", "The Mitchells vs. the Machines", "The Croods: A New Age"];

const alt_adventure = ['The Goonies', 'Back to the Future', 'The Treasure of the Sierra Madre', 'The African Queen', 'The Secret Life of Walter Mitty'];

const alt_musical = ['Mamma Mia!','The Greatest Showman', 'La La Land', 'Hamilton', 'West Side Story', 'The Sound of Music', 'Hairspray', 'The Phantom of the Opera'];

const configMovieTitles = (gen) => {
  gen.forEach(e => {
    let label = document.createElement('div');
    label.className = 'card col-10 col-sm-8 col-md-2 col-lg-2 titles';
    let h2 = document.createElement('h2');
    h2.textContent = e;
    label.appendChild(h2);
    titleDiv.appendChild(label);

    // Adicionar evento de clique aos elementos de título
    label.addEventListener("click", function() {
      label.classList.toggle('selected');
    });
  });
}
const displayMovieTitles = (genre) => {
  titleDiv.innerHTML = '';
  if (genre == "Action") {
    configMovieTitles(action);
  }else if(genre == "Romance"){
    configMovieTitles(romance)
  } else if (genre == "Comedy") {
    configMovieTitles(comedy);
  } else if (genre == "Horror") {
    configMovieTitles(horror);
  } else if (genre == "Thriller") {
    configMovieTitles(thriller);
  } else if (genre == "Fantasy") {
    configMovieTitles(fantasy);
  } else if (genre == "Drama") {
    configMovieTitles(drama);
  } else if (genre == "Kids") {
    configMovieTitles(kids);
  } else if (genre == "Adventure") {
    configMovieTitles(adventure);
  } else if (genre == "Musical") {
    configMovieTitles(musical);
  }
  
};

// Verifica se ocorreu uma mudança nos elementos de seleção
const checkChanges = () => {
  // Verifica se houve mudanças nos gêneros
  const genresChanged = Array.from(genres).some(element => element.classList.contains('selected'));

  // Verifica se houve mudanças na faixa etária
  const ageChanged = Array.from(age).some(element => element.classList.contains('selected'));

  if (genresChanged && ageChanged) {
    // Chame a função desejada aqui
    displayMovieTitles(selectedGenres)
    titles.forEach(e => {
      e.addEventListener("click", function() {
        e.classList.toggle('selected');
      });
    });
    res.innerHTML=''
    
    console.log('Mudanças detectadas');
  }
};

// Adiciona o evento de clique (click event) aos elementos de seleção
genres.forEach(element => {
  element.addEventListener("click", function() {
    const genre = element.textContent.trim();

    // Remove a seleção de outros gêneros
    genres.forEach(item => {
      if (item !== element) {
        item.classList.remove('selected');
        const selectedGenre = item.textContent.trim();
        const index = selectedGenres.indexOf(selectedGenre);
        if (index > -1) {
          selectedGenres.splice(index, 1);
        }
      }
    });

    element.classList.toggle('selected');

    // Atualiza o array de gêneros selecionados
    selectedGenres = element.classList.contains('selected') ? [genre] : [];

    console.log(selectedGenres);
    checkChanges(); // Verifica as mudanças após cada clique
  });
});

age.forEach(element => {
  element.addEventListener("click", function() {
    // Remove a classe 'selected' de todos os elementos de idade
    age.forEach(item => item.classList.remove('selected'));
    element.classList.add('selected');
    selectedAge = element.textContent.trim();
    console.log(selectedAge);
    checkChanges(); // Verifica as mudanças após cada clique
  });
});
clean.addEventListener('click', function(){
  selectedAge = '';
  selectedGenres = [];
  matchQuery = [];
  genres.forEach(e => {
    e.classList.remove('selected')
  })
  age.forEach(e => {
    e.classList.remove('selected')
  })
  res.innerHTML=''
  titleDiv.innerHTML=''
  document.documentElement.scrollTop=0
})


const toggleVisibility = () => {
  if (selectedGenres.length > 0 && selectedAge !== '') {
    titles.forEach(element => {
      titlesLabel.style.display='block'
      element.style.display = 'flex';
    });
  } else {
    titles.forEach(element => {
      element.style.display = 'none';
      titlesLabel.style.display='none' 
    });
  }
}
document.body.addEventListener('click', function(){
  toggleVisibility()
})
window.addEventListener('load', function(){
  titlesLabel.style.display='none'
  titles.forEach(element => {
    element.style.display='none'
  });
})

const API_KEY = '12a3c56c';

const matchMovies = (query, space, qtd) => {
  // Verifica se a seção já existe
  let section = space.querySelector('.mt-5');
  
  if (!section) {
    // Cria a seção caso não exista
    section = document.createElement('section');
    section.className = 'mt-5';
    
    const h2 = document.createElement('h2');
    h2.className = 'm-4 line-text';
    h2.textContent = 'Suas Recomendações';
    
    const div = document.createElement('div');
    div.className = 'linha';
    
    h2.appendChild(div);
    section.appendChild(h2);
    
    space.appendChild(section);
  }
  
  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&type=movie&plot=full&page=1`)
    .then(response => response.json())
    .then(data => {
      if (Array.isArray(data.Search)) {
        data.Search.slice(0, qtd).forEach(movie => {
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

          space.appendChild(card);
        });
      } else {
        console.log(`No movies found for query: ${query}`);
      }
    })
    .catch(error => console.error(error));
}

const verifyGenre = (g) => {
  let movies = [];

  if (g == "Action") {
    movies = alt_action;
  } else if (g == "Comedy") {
    movies = alt_comedy;
  } else if (g == "Romance") {
    movies = alt_romance;
  } else if (g == "Horror") {
    movies = alt_horror;
  } else if (g == "Thriller") {
    movies = alt_thriller;
  } else if (g == "Fantasy") {
    movies = alt_fantasy;
  } else if (g == "Drama") {
    movies = alt_drama;
  } else if (g == "Kids") {
    movies = alt_kids;
  } else if (g == "Adventure") {
    movies = alt_adventure;
  } else if (g == "Musical") {
    movies = alt_musical;
  }

  if (movies.length > 0) {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const movie = movies[randomIndex];

    // Remove o filme selecionado do array
    movies.splice(randomIndex, 1);

    return movie;
  }
}


let match_btn = document.getElementById('match')

match_btn.addEventListener('click', function(){
  // const query = [];
  // document.querySelectorAll('.titles.selected').forEach(e => {
  //   query.push(e.textContent.trim())
  // })
  // let queryMovie = query[Math.floor(Math.random() * query.length)];
  // console.log(queryMovie)
  // matchMovies(queryMovie, res, 4)
  matchMovies(verifyGenre(selectedGenres), res, 1)
  matchMovies(verifyGenre(selectedGenres), res, 1)
  matchMovies(verifyGenre(selectedGenres), res, 1)
  matchMovies(verifyGenre(selectedGenres), res, 1)
})
