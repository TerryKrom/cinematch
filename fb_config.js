// Importações do Firebase e do Firebase Authentication
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";


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
const db = getFirestore(app);

