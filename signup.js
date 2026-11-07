
import { auth } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const message = document.getElementById("signupMessage");

    message.style.color = "#fca5a5";
    message.textContent = "";

    if (name.length < 3) {
        message.textContent = "Please enter your full name.";
        return;
    }

    if (password.length < 8) {
        message.textContent = "Password must be at least 8 characters.";
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        await updateProfile(userCredential.user, {
            displayName: name
        });

        message.style.color = "#86efac";
        message.textContent = "Account created successfully!";

        signupForm.reset();

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);

    } catch (error) {
        message.style.color = "#fca5a5";
        message.textContent = error.message;
    }
});

