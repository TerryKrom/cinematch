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
  if(localStorage.getItem('foto') == false){
    perfilImage.src = 'perfil.png'
    perfilImage.classList.toggle('logged');
  }
  a.href = 'account.html'
  outElement.forEach(element => {
    element.style.display = 'flex';
  })
}else{
  outElement.forEach(e => {
    e.style.display = 'none'
  })
}

outElement.forEach(element => {
  element.addEventListener('click', function () {
    localStorage.clear()
    logout()
    outElement.style.display = 'none';
    // window.location.href = 'login.html'
  })
})


let likedMovies = localStorage.getItem("likedMovies") || [];
if (typeof likedMovies != 'object'){
  likedMovies = likedMovies.split(',')
}

setTimeout(function () {
  const heart = document.querySelectorAll('.bi-heart-fill');
  const title = document.querySelectorAll('.card-title');
  const title_obj = {};

  title.forEach((item, index) => {
    title_obj[index] = item;
  });

  heart.forEach(element => {
    const id = element.getAttribute('id');
    const text_title = title_obj[id].textContent.split('\n', 1);
    if(likedMovies.includes(text_title[0])){
      element.classList.add('liked')
    }

    element.addEventListener("click", () => {
      if (element.classList.contains('liked')) {
        element.style.fill = "#fff";
        element.classList.remove('liked');
        removeLikedMovie(text_title[0]);
      } else {
        element.classList.add('liked');
        addLikedMovie(text_title[0]);
      }
    });
  });
}, 2000);

const addLikedMovie = (movieName) => {
  likedMovies.push(movieName)
  localStorage.setItem('likedMovies', likedMovies.toString())
}

const removeLikedMovie = (movieName) => {
  likedMovies.splice(likedMovies.indexOf(movieName))
  localStorage.setItem('likedMovies', likedMovies.toString())
}