import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAS2M4H8drns2vjBmEOGYx71HGX-ehalGc",
    authDomain: "food-ordering-56c96.firebaseapp.com",
    projectId: "food-ordering-56c96",
    storageBucket: "food-ordering-56c96.appspot.com",
    messagingSenderId: "466809081405",
    appId: "1:466809081405:web:a361ab4b9210b4e4d06454",
    measurementId: "G-6LNPXWBXKM"
};

export const app = initializeApp(firebaseConfig);