import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDGYzG2MxISstNAQcCVn3x4qrnbKQ_r0K4",
    authDomain: "fir-ae42b.firebaseapp.com",
    projectId: "fir-ae42b",
    storageBucket: "fir-ae42b.appspot.com",
    messagingSenderId: "521077883479",
    appId: "1:521077883479:web:dd93347f06b6f69b4ed912",
    measurementId: "G-X05SEB8S96"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);