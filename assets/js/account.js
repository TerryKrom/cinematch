let perfil_image = document.getElementById('perfil-image')
let imgUrl = localStorage.getItem('UserImg')
let nome = document.getElementById('name')
let usernameLabel = document.getElementById('username')
let username = localStorage.getItem('User')
usernameLabel.innerHTML+=username

if(localStorage.getItem('User')){
    let btns = document.querySelectorAll('.btn-login')
    btns.forEach(element => {
        element.style.display='none'
    });
    if (imgUrl != null){
        perfil_image.src=imgUrl
    }
}

let likedMovies = localStorage.getItem('likedMovies').split(',') || []
let res = document.getElementById('res')
console.log(likedMovies)
const displayLikedMovies = () => {
    if(likedMovies.length > 0){
        likedMovies.forEach(e => {
            let movieLabel = document.createElement('div')
            movieLabel.textContent = e
            res.appendChild(movieLabel)
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayLikedMovies()
})