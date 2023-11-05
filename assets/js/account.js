
let perfil_image = document.getElementById('perfil-image')
let imgUrl = localStorage.getItem('UserImg')
let nome = document.getElementById('name')
let usernameLabel = document.getElementById('username')
let username = localStorage.getItem('User')
usernameLabel.innerHTML+=username
if(localStorage.length == 0){
    icon.src='./perfil.png'
    out.forEach(element => {
        element.style.display='none';
    })
}
out.forEach(element => {
    element.addEventListener('click', function(){
    localStorage.clear()
    out.style.display='none';
    window.location.href='login.html'
    })
})

    
if(localStorage.length!=0){
    let btns = document.querySelectorAll('.btn-login')
    btns.forEach(element => {
        element.style.display='none'
    });   
}
let res = document.getElementById('res')
