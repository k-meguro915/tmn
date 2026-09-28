// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSo5l-q4ZW78fW0lxqNAL5mgLIhNAzi-U",
  authDomain: "tmcapsule-e9c79.firebaseapp.com",
  projectId: "tmcapsule-e9c79",
  storageBucket: "tmcapsule-e9c79.firebasestorage.app",
  messagingSenderId: "805214062620",
  appId: "1:805214062620:web:89e77d7c801495a2f0f7d9",
  measurementId: "G-XS734D81RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);