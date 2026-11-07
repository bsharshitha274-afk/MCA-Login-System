
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9ZixN2uRFEOUC3l32yEdWcQ8TEDRVCL4",
    authDomain: "mca-login-page.firebaseapp.com",
    projectId: "mca-login-page",
    storageBucket: "mca-login-page.firebasestorage.app",
    messagingSenderId: "856045082580",
    appId: "1:856045082580:web:17a3310fc177103538e841",
    measurementId: "G-L6C9V20BXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);
