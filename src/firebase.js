import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCCcEhAMkW5k0t5bQ4U1Z0CIfLG4spnQQE",
  authDomain: "offff-9cebc.firebaseapp.com",
  projectId: "offff-9cebc",
  storageBucket: "offff-9cebc.appspot.com",
  messagingSenderId: "142674899263",
  appId: "1:142674899263:web:29ab51cb1762daf4bea38a",
};


const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app)