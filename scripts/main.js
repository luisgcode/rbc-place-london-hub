"use strict";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7svqbpLgrRp3zNBAiU_x4C3hjLtAIFMM",
  authDomain: "rbc-hub.firebaseapp.com",
  projectId: "rbc-hub",
  storageBucket: "rbc-hub.firebasestorage.app",
  messagingSenderId: "784121241722",
  appId: "1:784121241722:web:b...",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM Elements
const loginForm = document.querySelector("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

// Handle Login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successful login
      console.log("User signed in:", userCredential.user);
      alert("Login successful! Redirecting...");
      window.location.href = "content.html"; // Redirect to content page
    })
    .catch((error) => {
      // Handle errors
      console.error("Error signing in:", error);
      alert("Login failed: " + error.message);
    });
});
