// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXU35aiTO9nWZKIjg_OXEtKZq5PSdTuPU",
  authDomain: "workplace-project-a590f.firebaseapp.com",
  projectId: "workplace-project-a590f",
  storageBucket: "workplace-project-a590f.appspot.com",
  messagingSenderId: "340834315322",
  appId: "1:340834315322:web:6f1f43573de8fa3ce81903"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)