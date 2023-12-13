import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgwT1QKh9V2c_M0cTupaE78rujHXglFi8",
  authDomain: "nwitter-reloaded-14a30.firebaseapp.com",
  projectId: "nwitter-reloaded-14a30",
  storageBucket: "nwitter-reloaded-14a30.appspot.com",
  messagingSenderId: "192228049299",
  appId: "1:192228049299:web:74d81e3f8b55e3423a2866"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);