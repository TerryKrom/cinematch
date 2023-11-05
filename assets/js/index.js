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

