// Importações do Firebase e do Firebase Authentication
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, where } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";


// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDpQcKbYfP6PWYo4186zfLKP9vlfZjC5YE",
  authDomain: "cinematch-3e757.firebaseapp.com",
  projectId: "cinematch-3e757",
  storageBucket: "cinematch-3e757.appspot.com",
  messagingSenderId: "372273255417",
  appId: "1:372273255417:web:aea0cdab837d2baaf5e328",
  measurementId: "G-JELQB2MP41"
};


// Inicialização do Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(async (result) => {
      // Login bem-sucedido, redirecionar para página de sucesso ou realizar outras ações
      localStorage.setItem('User', result.user.displayName);
      localStorage.setItem('UserImg', result.user.photoURL);
      window.location.href = './index.html';
      const email = result.user.email;
      const querySnapshot = await getDocs(collection(db, "usuarios"), where("email", "==", email));
      if (querySnapshot.empty) {
        // A conta do Google não foi registrada anteriormente, lançar um erro
        throw new Error("Conta do Google não registrada. Faça o registro antes de fazer login.");
      }
    })
    .catch((error) => {
      // Tratar erros de login
      console.log("Erro no login com Google:", error);
    });
};

const googleButton = document.getElementById('google-btn');
googleButton.addEventListener('click', signInWithGoogle);

const form = document.querySelector('.login-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Capturar os valores dos inputs
  const email = form.querySelector('input[type="email"]').value;
  const password = form.querySelector('input[type="password"]').value;

  // Verificar se a conta já foi registrada anteriormente
  const querySnapshot = await getDocs(collection(db, "usuarios"), where("email", "==", email));

  if (querySnapshot.empty) {
    // A conta não foi registrada anteriormente, gerar um erro
    console.error("Conta não encontrada. Faça o registro antes de fazer login.");
    return;
  }

  // A conta existe, prosseguir com o login
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login bem-sucedido, redirecionar para página de sucesso ou realizar outras ações
      console.log("Login realizado com sucesso:", userCredential.user);
      window.location.href = './index.html';
    })
    .catch((error) => {
      // Tratar erros de login
      console.log("Erro no login:", error);
    });
});


const accountCheck = () => {
    if (localStorage.getItem('User') != null) {
      window.location.href = 'index.html'
    }
}

document.addEventListener("DOMContentLoaded", () => {
    accountCheck()
})