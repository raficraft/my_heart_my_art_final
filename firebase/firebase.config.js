import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYmSi7K9vapVm8fL7YuZyXx5Rl7kQFNAk",
  authDomain: "myheartinmyart.firebaseapp.com",
  projectId: "myheartinmyart",
  storageBucket: "myheartinmyart.appspot.com",
  messagingSenderId: "623139485560",
  appId: "1:623139485560:web:32c7a10285e4a13267ba8d",
  measurementId: "G-0DKV2EE5L6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
//const analytics = getAnalytics(app);
