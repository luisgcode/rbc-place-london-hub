"use strict";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// Import Firebase Auth functions
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7svqbpLgrRp3zNBAiU_x4C3hjLtAIFMM",
  authDomain: "rbc-hub.firebaseapp.com",
  projectId: "rbc-hub",
  storageBucket: "rbc-hub.firebasestorage.app",
  messagingSenderId: "784121241722",
  appId: "1:784121241722:web:b3beba2b713e155767dbc3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Attach event listener to submit button
const submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
  event.preventDefault();

  // Retrieve email and password values inside the event listener
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create user
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User successfully created
      const user = userCredential.user;
      alert("Account created successfully!");
    })
    .catch((error) => {
      // Handle errors
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
});
