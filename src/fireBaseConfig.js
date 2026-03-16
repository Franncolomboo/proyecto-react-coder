
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA-xkk0DsJ1c3-DLm3o9jZDxJHyl3p6AGc",
  authDomain: "coderhouse-react-e754b.firebaseapp.com",
  projectId: "coderhouse-react-e754b",
  storageBucket: "coderhouse-react-e754b.firebasestorage.app",
  messagingSenderId: "165053633147",
  appId: "1:165053633147:web:dda6bfafaf2fb99de708de",
  measurementId: "G-Q526CRLN3R"
};


export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export const db = getFirestore(app);