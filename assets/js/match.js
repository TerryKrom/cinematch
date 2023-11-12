let genres = document.querySelectorAll('.genre');
let selectedGenres = [];
let matchQuery = [];
let res = document.getElementById('res')
let age = document.querySelectorAll('.age');
let selectedAge = '';
let cleanBtn = document.getElementById('limpar')
let titles = document.querySelectorAll('.titles')
let selectedTitles = []
let titlesLabel = document.getElementById('tlabel')
let titleDiv = document.querySelector('.title-div')
let match_btn = document.getElementById('match')

/**The movie titles it will appear to select */
const action = {
  'The Equalizer': 18,
  'Rocky': 14,
  'The Expendables': 18,
  'Angel has Fallen': 14,
  'Jurassic Park': 12,
  'Spider-Man: Homecoming': 12,
  'Mission: Impossible - Ghost Protocol': 12,
  'Guardians of the Galaxy': 12,
  'Harry Potter and the Philosopher\'s Stone': 12,
  'Star Wars: The Force Awakens': 10,
  'Pirates of the Caribbean: The Curse of the Black Pearl': 10,
  'The Karate Kid': 10,
  'Indiana Jones: Raiders of the Lost Ark': 12,
  'The Incredibles': 10,
};
const comedy = {
  'Anchorman': 14,
  'Superbad': 18,
  'Bridesmaids': 16,
  'The Hangover': 18,
  'Step Brothers': 14,
  "Dirty Grandpa": 18
};

const romance = {
  'Titanic': 14,
  'The Notebook': 14,
  'Romeo + Juliet': 16,
  'Pride and Prejudice': 16,
  'La La Land': 16,
  'The Fault in Our Stars': 16
};

const horror = {
  'The Shining': 18,
  'Get Out': 16,
  'A Quiet Place': 16,
  'Hereditary': 18,
  'It': 16,
  'Paranormal Activity': 16
};

const thriller = {
  'Inception': 16,
  'Gone Girl': 16,
  'The Silence of the Lambs': 18,
  'Memento': 16,
  'Shutter Island': 16,
  'Se7en': 18
};

const fantasy = {
  'The Lord of the Rings': 14,
  'Harry Potter': 14,
  'Alice in Wonderland': 14,
  'Pan\'s Labyrinth': 16,
  'The Chronicles of Narnia': 14,
  'Stardust': 16
};

const drama = {
  'The Shawshank Redemption': 16,
  'The Godfather': 18,
  'Forrest Gump': 14,
  'Schindler\'s List': 18,
  'Fight Club': 18,
  'The Pursuit of Happyness': 14
};

const kids = {
  'Toy Story': 0, // Considerando filmes de animação para todas as idades
  'Finding Nemo': 0,
  'The Lion King': 0,
  'Moana': 0,
  'Shrek': 0,
  'Frozen': 0,
  'The king lion': 0,
};

const adventure = {
  'Indiana Jones': 14,
  'Jurassic Park': 14,
  'Pirates of the Caribbean': 14,
  'The Mummy': 14,
  'National Treasure': 14,
  'Jumanji': 14
};

const musical = {
  'Grease': 14,
  'Les Misérables': 14,
  'Chicago': 14,
  'Moulin Rouge!': 14,
  'The Sound of Music': 14,
  'Hamilton': 14
};


/**The movie recomendations */
// Ação
const alt_action = [
  'Die Hard',
  'Mad Max: Fury Road',
  'The Dark Knight',
  'Mission: Impossible',
  'Taken',
  'Kill Bill',
  'John Wick',
  'The Matrix',
  'Inception',
  'Gladiator',
  'The Bourne Identity',
  'The Terminator'
];

// Comédia
const alt_comedy = [
  "The 40-Year-Old Virgin",
  "Borat",
  "Talladega Nights: The Ballad of Ricky Bobby",
  "The Other Guys",
  "This Is the End",
  "The Nice Guys",
  'Superbad',
  'Anchorman: The Legend of Ron Burgundy',
  'Step Brothers',
  'Dumb and Dumber',
  'Shaun of the Dead',
  'Hot Fuzz'
];

// Romance
const alt_romance = [
  "The Fault in Our Stars",
  "A Star is Born",
  "The Time Traveler's Wife",
  "The Vow",
  "Me Before You",
  "The Best of Me",
  'Pride and Prejudice',
  'Notting Hill',
  'Before Sunrise',
  'Eternal Sunshine of the Spotless Mind',
  'La La Land',
  'The Notebook'
];

// Terror
const alt_horror = [
  'The Exorcist',
  'The Shining',
  'Halloween',
  'Nightmare on Elm Street',
  'The Texas Chainsaw Massacre',
  'Psycho',
  'Get Out',
  'A Quiet Place',
  'Hereditary',
  'The Babadook',
  'The Conjuring',
  'It Follows'
];

// Thriller
const alt_thriller = [
  'The Departed',
  'Zodiac',
  'Prisoners',
  'Gone Baby Gone',
  'The Invisible Guest',
  'The Prestige',
  'The Talented Mr. Ripley',
  'The Fugitive',
  'Seven',
  'Memento',
  'Shutter Island',
  'Silence of the Lambs'
];

// Fantasia
const alt_fantasy = [
  'The Hobbit',
  'Fantastic Beasts and Where to Find Them',
  'The NeverEnding Story',
  'The Dark Crystal',
  'Willow',
  'Avatar',
  'Pan\'s Labyrinth',
  'Harry Potter and the Sorcerer\'s Stone',
  'Stardust',
  'The Chronicles of Narnia',
  'The Princess Bride',
  'The Wizard of Oz'
];

// Drama
const alt_drama = [
  'The Green Mile',
  'The Pianist',
  'The Shawshank Redemption',
  'Forrest Gump',
  'Schindler\'s List',
  'American Beauty',
  'The Godfather',
  '12 Angry Men',
  'Fight Club',
  'Good Will Hunting',
  'A Beautiful Mind',
  'The Pursuit of Happyness'
];

// Infantil
const alt_kids = [
  "Onward",
  "Soul",
  "Luca",
  "Raya and the Last Dragon",
  "The Mitchells vs. the Machines",
  "The Croods: A New Age",
  'Moana',
  'Frozen',
  'Toy Story',
  'Finding Nemo',
  'The Lion King',
  'Shrek'
];

// Aventura
const alt_adventure = [
  'The Goonies',
  'Back to the Future',
  'The Treasure of the Sierra Madre',
  'The African Queen',
  'The Secret Life of Walter Mitty',
  'Indiana Jones: Raiders of the Lost Ark',
  'Jurassic Park',
  'Pirates of the Caribbean: The Curse of the Black Pearl',
  'The Revenant',
  'The Martian',
  'Cast Away',
  'Jurassic Park'
];

// Musical
const alt_musical = [
  'Mamma Mia!',
  'The Greatest Showman',
  'La La Land',
  'Hamilton',
  'West Side Story',
  'The Sound of Music',
  'Hairspray',
  'The Phantom of the Opera',
  'Grease',
  'Chicago',
  'Les Misérables',
  'A Star is Born'
];


const configMovieTitles = (gen) => {
  let counter = 0;
  for (let genre in gen) {
    if (gen[genre] <= selectedAge) {
      if (counter <= 5) {
        let label = document.createElement('div');
        label.className = 'card col-10 col-sm-8 col-md-2 col-lg-2 titles';
        let h2 = document.createElement('h2');
        h2.textContent = genre;
        label.appendChild(h2);
        titleDiv.appendChild(label);

        // Adicionar evento de clique aos elementos de título
        label.addEventListener("click", function () {
          label.classList.toggle('selected');
        });
        counter++
      }
    }
  }
}

const displayMovieTitles = (genre) => {
  titleDiv.innerHTML = '';
  const genres = {
    "Action": action,
    "Romance": romance,
    "Comedy": comedy,
    "Horror": horror,
    "Thriller": thriller,
    "Fantasy": fantasy,
    "Drama": drama,
    "Kids": kids,
    "Adventure": adventure,
    "Musical": musical,
  }
  configMovieTitles(genres[genre])
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
      e.addEventListener("click", function () {
        e.classList.toggle('selected');
      });
    });
    res.innerHTML = ''
  }
};

// Adiciona o evento de clique (click event) aos elementos de seleção
genres.forEach(element => {
  element.addEventListener("click", function () {
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

    checkChanges(); // Verifica as mudanças após cada clique
  });
});

age.forEach(element => {
  element.addEventListener("click", function () {
    // Remove a classe 'selected' de todos os elementos de idade
    age.forEach(item => item.classList.remove('selected'));
    element.classList.add('selected');
    selectedAge = element.textContent.trim();
    if (selectedAge == '18+') {
      selectedAge = 18
    } else {
      selectedAge = parseInt(selectedAge)
    }
    checkChanges(); // Verifica as mudanças após cada clique
  });
});

cleanBtn.addEventListener('click', function () {
  selectedAge = '';
  selectedGenres = [];
  matchQuery = [];
  genres.forEach(e => {
    e.classList.remove('selected')
  })
  age.forEach(e => {
    e.classList.remove('selected')
  })
  res.innerHTML = ''
  titleDiv.innerHTML = ''
  document.documentElement.scrollTop = 0
})


const toggleVisibility = () => {
  if (selectedGenres.length > 0 && selectedAge !== '') {
    titles.forEach(element => {
      titlesLabel.style.display = 'block'
      element.style.display = 'flex';
    });
  } else {
    titles.forEach(element => {
      element.style.display = 'none';
      titlesLabel.style.display = 'none'
    });
  }
}
document.body.addEventListener('click', function () {
  toggleVisibility()
})
window.addEventListener('load', function () {
  titlesLabel.style.display = 'none'
  titles.forEach(element => {
    element.style.display = 'none'
  });
})

const API_KEY = '12a3c56c';

const matchMovies = (query, space, qtd) => {
  // Verifica se a seção já existe
  if (query != undefined) {
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

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&type=movie&plot=full&page=1`)
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
}

const verifyGenre = (genre) => {
  let movies = [];

  const altMovies = {
    "Action": alt_action,
    "Romance": alt_romance,
    "Comedy": alt_comedy,
    "Horror": alt_horror,
    "Thriller": alt_thriller,
    "Fantasy": alt_fantasy,
    "Drama": alt_drama,
    "Kids": alt_kids,
    "Adventure": alt_adventure,
    "Musical": alt_musical,
  }
  movies = altMovies[genre]

  if (movies.length > 0) {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const movie = movies[randomIndex];
    movies.splice(randomIndex, 1);
    return movie;
  }else{
    window.location.reload()
  }
}

match_btn.addEventListener('click', function () {
  res.innerHTML=''
  matchMovies(verifyGenre(selectedGenres), res, 1)
  matchMovies(verifyGenre(selectedGenres), res, 1)
  matchMovies(verifyGenre(selectedGenres), res, 1)
  matchMovies(verifyGenre(selectedGenres), res, 1)
})
