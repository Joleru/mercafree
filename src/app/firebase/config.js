// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC747n2tafYiUzG5UEHF_rWPODgCxa3c3s",
  authDomain: "prueba-10220.firebaseapp.com",
  projectId: "prueba-10220",
  storageBucket: "prueba-10220.appspot.com",
  messagingSenderId: "848203863411",
  appId: "1:848203863411:web:502ea0e7f5e93f6bbce106"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const gooogleProvider = new GoogleAuthProvider()

export const google = async () =>{
    const userCredential = await signInWithPopup(auth, gooogleProvider);
    return userCredential
};
