
  // Importações do Firebase e do Firebase Authentication
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
  import { getFirestore, collection, addDoc, increment } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
  

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
  const db = getFirestore(app);

  const setUserDataInLocalStorage = (user) => {
    localStorage.setItem('User', user.displayName);
    if (user.photoURL) {
      localStorage.setItem('UserImg', user.photoURL);
    } else {
      localStorage.setItem('foto', 'false');
    }
  };

  const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(async (result) => {
      // Login bem-sucedido, redirecionar para página de sucesso ou realizar outras ações
      console.log("Login com Google realizado com sucesso:", result.user);
      const displayName = result.user.displayName;
      localStorage.setItem('User', displayName);
      localStorage.setItem('UserImg', result.user.photoURL);
      const email = result.user.email;

      const querySnapshot = await getDocs(collection(db, "usuarios"), where("email", "==", email));

      if (querySnapshot.empty) {
        // A conta do Google não foi registrada anteriormente, adicionar no Firestore
        await addDoc(collection(db, "usuarios"), {
          nome: displayName,
          email: email
        });
        console.log("Conta do Google adicionada ao Firestore com sucesso!");
      }
      window.location.href = './index.html';
    })
    .catch((error) => {
      // Tratar erros de login
      console.log("Erro no login com Google:", error);
    });
};

  const googleButton = document.getElementById('google-btn');
  googleButton.addEventListener('click', signInWithGoogle);

  const form = document.querySelector('.login-form');

  form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const senha = form.querySelector('input[type="password"]').value;

  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      // Usuário criado com sucesso
      const user = userCredential.user;
      console.log("Usuário criado com sucesso:", user);

      // Salvar dados do usuário no Firestore
      addDoc(collection(db, "usuarios"), {
        nome: nome,
        email: email,
        senha: senha
        // Você pode adicionar outros campos desejados aqui
      })
        .then((docRef) => {
          console.log("Dados inseridos com sucesso no Firestore. ID do documento:", docRef.id);
          setUserDataInLocalStorage({ displayName: nome });
          localStorage.setItem('foto', 'false'); // Define o campo 'foto' como falso
          window.location.href = '/index.html';
        })
        .catch((error) => {
          console.error("Erro ao inserir dados no Firestore:", error);
        });
    })
    .catch((error) => {
      console.error("Erro ao criar usuário:", error);
    });
});

