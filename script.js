
import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");

// Show and hide password
togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "◉";
    } else {
        password.type = "password";
        togglePassword.textContent = "◎";
    }
});

// Firebase Login
loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    message.textContent = "";
    message.style.color = "#fca5a5";

    const emailValue = email.value.trim();
    const passwordValue = password.value;

    try {
        await signInWithEmailAndPassword(
            auth,
            emailValue,
            passwordValue
        );

        message.style.color = "#86efac";
        message.textContent = "Login successful! Welcome back.";

        setTimeout(function () {
            window.location.assign("./dashboard.html");
        }, 1000);

    } catch (error) {
        console.error("Login Error:", error);
        message.textContent = error.message;
    }
});

// Forgot Password
document.getElementById("forgotPassword")
    .addEventListener("click", async function (event) {

        event.preventDefault();

        const emailValue = email.value.trim();

        if (!emailValue) {
            message.textContent = "Please enter your email first.";
            return;
        }

        try {
            await sendPasswordResetEmail(auth, emailValue);

            message.style.color = "#86efac";
            message.textContent = "Password reset email sent!";

        } catch (error) {
            console.error("Reset Error:", error);
            message.style.color = "#fca5a5";
            message.textContent = error.message;
        }
    });

