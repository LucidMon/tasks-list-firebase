import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBYkMY82gYeknpM9RCeQSCLYcGlMSnEZ2U",
    authDomain: "tasks-list-firebase.firebaseapp.com",
    projectId: "tasks-list-firebase",
    storageBucket: "tasks-list-firebase.appspot.com",
    messagingSenderId: "40575482095",
    appId: "1:40575482095:web:96b31c85b3b820be52c31a",
    measurementId: "G-RBD4LED6B6"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);