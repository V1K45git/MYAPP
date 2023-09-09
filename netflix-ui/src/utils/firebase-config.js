
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDafzi_PsB47wdPGjBb7D96Xjtb_ANZ4n8",
  authDomain: "netflix1-11d02.firebaseapp.com",
  projectId: "netflix1-11d02",
  storageBucket: "netflix1-11d02.appspot.com",
  messagingSenderId: "452915354727",
  appId: "1:452915354727:web:a87e16c5e66557a01ec8c2",
  measurementId: "G-TDTE1N3N1N"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
