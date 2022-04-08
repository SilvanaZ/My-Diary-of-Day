import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { analytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB0ZamZa-u7VWKOO18OLlhwWUUcPbOJ64M",
    authDomain: "my-diary-note-my-days.firebaseapp.com",
    projectId: "my-diary-note-my-days",
    storageBucket: "my-diary-note-my-days.appspot.com",
    messagingSenderId: "727914650391",
    appId: "1:727914650391:web:a9a610d08f1e18921e3552",
    measurementId: "G-4NK82PM92G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);