let nome = document.getElementById('name')
let usernameLabel = document.getElementById('username')
let username = localStorage.getItem('User')
usernameLabel.innerHTML+=username
let likedDiv = document.querySelector(".liked")

let likedMovies = localStorage.getItem('likedMovies').split(',') || []
let res = document.getElementById('res')
const displayLikedMovies = () => {
    if(likedMovies.length > 0){
        likedDiv.style.display="block"
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