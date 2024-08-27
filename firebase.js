// this file initializes firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHcahxfy9tgCsrXIxJwgUh1xBAaFE8whI",
  authDomain: "ai-ratemyprof-dd45e.firebaseapp.com",
  projectId: "ai-ratemyprof-dd45e",
  storageBucket: "ai-ratemyprof-dd45e.appspot.com",
  messagingSenderId: "842680600264",
  appId: "1:842680600264:web:5502581610f0da0f3d07fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};