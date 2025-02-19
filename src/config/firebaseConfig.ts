import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration (Use your own Firebase project details)
const firebaseConfig = {
  apiKey: "AIzaSyCZCaAN4DfSc191linUsbQMCII0nOgAEZU",
  authDomain: "myawesomedashboard-227e0.firebaseapp.com",
  projectId: "myawesomedashboard-227e0",
  storageBucket: "myawesomedashboard-227e0.appspot.com",
  messagingSenderId: "958496954372",
  appId: "1:958496954372:web:453268985b73ef2ffebd51",
  measurementId: "G-ZNLPS904DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { app, analytics, auth, provider, db };
