import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCX_k3nY6beoI9YlnP1Eqx4Dgh140s_ZZk",
    authDomain: "contabelize.firebaseapp.com",
    projectId: "contabelize",
    storageBucket: "contabelize.appspot.com",
    messagingSenderId: "1094750666616",
    appId: "1:1094750666616:web:2497b29ffa37b54afb128d"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('loginButton').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login bem-sucedido
            const user = userCredential.user;
            // Salva as credenciais no localStorage
            saveCredentials(email, password);
            // Redirecionar para a página principal
            window.location.href = "index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: 'Erro no login: ' + errorMessage,
                confirmButtonColor: '#B93171'
            });
        });
});

// Função para salvar as credenciais no localStorage
function saveCredentials(email, password) {
    const credentials = {
        email: email,
        password: password,
        timestamp: new Date().getTime()
    };
    localStorage.setItem('userCredentials', JSON.stringify(credentials));
}

// Função para carregar as credenciais do localStorage
function loadCredentials() {
    const credentials = localStorage.getItem('userCredentials');
    if (credentials) {
        const parsedCredentials = JSON.parse(credentials);
        const now = new Date().getTime();
        // Verifica se as credenciais são válidas por 10 dias (10 dias em milissegundos)
        if (now - parsedCredentials.timestamp < 10 * 24 * 60 * 60 * 1000) {
            signInWithEmailAndPassword(auth, parsedCredentials.email, parsedCredentials.password)
                .then((userCredential) => {
                    // Login automático bem-sucedido
                    window.location.href = "./index.html";
                })
                .catch((error) => {
                });
        } else {
            localStorage.removeItem('userCredentials'); // Remove as credenciais expiradas
        }
    }
}

// Verifica o estado de autenticação ao carregar a página
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Usuário está logado
        window.location.href = "index.html";
    } else {
        // Tenta carregar credenciais do localStorage
        loadCredentials();
    }
});
