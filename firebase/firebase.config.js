// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrciBO0AMgn1kqSkS_GEymDWGUCpyq70o",
  authDomain: "techgamedminion.firebaseapp.com",
  projectId: "techgamedminion",
  storageBucket: "techgamedminion.appspot.com",
  messagingSenderId: "420796242319",
  appId: "1:420796242319:web:ef65391eef7693f5c953fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth