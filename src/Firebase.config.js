// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkce9xqypA2hf7avYOD7LAjlnG4KTD7qA",
  authDomain: "module-51-22633.firebaseapp.com",
  projectId: "module-51-22633",
  storageBucket: "module-51-22633.appspot.com",
  messagingSenderId: "101741870374",
  appId: "1:101741870374:web:906019fe6ea41fc97615e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
