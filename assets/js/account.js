let username = localStorage.getItem('User')
let likedDiv = document.querySelector(".liked")
let userImg = localStorage.getItem("UserImg")
let img = document.getElementById("userImg")
let usernameLabel = document.getElementById("username")

if(userImg){
    img.src=userImg;
}else{
    img.src='../images/perfil.png'
}

if(username){
    usernameLabel.textContent=username
}

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