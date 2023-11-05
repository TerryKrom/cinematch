let imgUrl = localStorage.getItem('UserImg')
let perfilImage = document.getElementById('perfil')
let outElement = document.querySelectorAll('.out')
const logout = () => {
    auth.signOut()
        .then(() => {
            console.log("Logout realizado com sucesso.");
            // Redirecione para a página de login ou para outra página desejada
            window.location.href = "login.html";
        })
        .catch((error) => {
            console.error("Erro ao fazer logout:", error);
        });
};

if (localStorage.getItem('User') != null && localStorage.getItem('foto') == false) {
    perfilImage.src = 'perfil.png'
    perfilImage.classList.toggle('logged');
    a.href = 'account.html'
    outElement.forEach(element => {
        element.style.display = 'flex';
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


const likedMovies = [];

setTimeout(function () {
  const heart = document.querySelectorAll('.bi-heart-fill');
  const title = document.querySelectorAll('.card-title');
  const title_obj = {};

  title.forEach((item, index) => {
    title_obj[index] = item;
  });

  heart.forEach(element => {
    element.addEventListener("click", async function () {
      const id = element.getAttribute('id');
      const text_title = title_obj[id].textContent.split('\n', 1);
      if (element.classList.contains('liked')) {
        element.style.fill = "#fff";
        element.classList.remove('liked');
        removeLikedMovie(text_title[0]);
      } else {
        element.style.fill = "#e6051f";
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