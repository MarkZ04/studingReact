import firebase from "firebase";
import { env } from "process";

const firebaseConfig = {
  apiKey: "AIzaSyBa0EzpXHGD4AV1rzjaOvfZscFPdyUlp4Y",
  authDomain: "chatreact-59d6c.firebaseapp.com",
  databaseURL: "https://chatreact-59d6c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chatreact-59d6c",
  storageBucket: "chatreact-59d6c.appspot.com",
  messagingSenderId: "149219939983",
  appId: "1:149219939983:web:02d425dc0c9bfdffaf82fa",
  measurementId: "G-H975TLF7JF"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.database();

console.log(env);