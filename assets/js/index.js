let imgUrl = localStorage.getItem('UserImg')
let perfilImage = document.getElementById('perfil')
let outElement = document.querySelectorAll('.out')

const logout = () => {
  auth.signOut()
    .then(() => {
      window.location.href = "login.html";
    })
    .catch((error) => {
      console.error("Erro ao fazer logout:", error);
    });
};

if (localStorage.getItem('User') != null) {
  if (localStorage.getItem('foto') == false) {
    perfilImage.src = 'perfil.png'
    perfilImage.classList.toggle('logged');
  }
  a.href = 'account.html'
  outElement.forEach(element => {
    element.style.display = 'flex';
  })
} else {
  outElement.forEach(e => {
    e.style.display = 'none'
  })
}

outElement.forEach(element => {
  element.addEventListener('click', function () {
    localStorage.clear()
    logout()
    outElement.style.display = 'none';
    window.location.href = 'login.html'
  })
})


let likedMovies = localStorage.getItem("likedMovies") || [];

if (typeof likedMovies != 'object') {
  likedMovies = likedMovies.split(',')
}

const handleHeartClick = (element, text_title) => {
  if (element.classList.contains('liked')) {
    element.classList.remove('liked');
    removeLikedMovie(text_title);
  } else {
    element.classList.add('liked');
    addLikedMovie(text_title);
  }
};

const activeHearts = () => {
  
  let heart = document.querySelectorAll('.heart-icon');
  let heartSearch = document.querySelectorAll(".heart-icon-search")
  
  let title = document.querySelectorAll('.card-title');
  let titleSearch = document.querySelectorAll('.card-title-search')

  let title_obj = {};
  let title_search_obj = {}

  title.forEach((item, index) => {
    title_obj[index] = item;
  });

  titleSearch.forEach((item, index) => {
    title_search_obj[index + Object.keys(title_obj).length] = item;
  })

  heart.forEach(element => {
    const id = element.getAttribute('id');
    const text_title = title_obj[id].textContent.split('\n', 1).toString();

    if(likedMovies.includes(text_title)){
      element.classList.add('liked')
    }

    element.addEventListener("click", () => {
      handleHeartClick(element, text_title);
    });
  });

  heartSearch.forEach(element => {
    const id = element.getAttribute('id');
    const text_title = title_search_obj[id].textContent.split('\n', 1).toString();
    if(likedMovies.includes(text_title)){
      element.classList.add('liked')
    }
    element.addEventListener("click", () => {
      handleHeartClick(element, text_title);
    });
  })
}

const addLikedMovie = (movieName) => {
  likedMovies.push(movieName)
  localStorage.setItem('likedMovies', likedMovies.toString())
}

const removeLikedMovie = (movieName) => {
  likedMovies.splice(likedMovies.indexOf(movieName))
  localStorage.setItem('likedMovies', likedMovies.toString())
}