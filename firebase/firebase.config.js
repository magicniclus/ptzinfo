import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  databaseURL:
    "https://ptz-info-default-rtdb.europe-west1.firebasedatabase.app",
  apiKey: "AIzaSyBByJMloYhP3xh_t4fmUMv6cxIYgrXBJ-Y",
  authDomain: "ptz-info.firebaseapp.com",
  projectId: "ptz-info",
  storageBucket: "ptz-info.appspot.com",
  messagingSenderId: "403642933392",
  appId: "1:403642933392:web:e290606a13005110b57815",
};

// Vérifier si Firebase a déjà été initialisé
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Get a reference to the auth service
const auth = getAuth();

export { app, auth };
