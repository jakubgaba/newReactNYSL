// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6_FMbRGDrbvBMY11z-ZBNUXed3fKzbNI",
  authDomain: "newnysl.firebaseapp.com",
  databaseURL: "https://newnysl-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "newnysl",
  storageBucket: "newnysl.appspot.com",
  messagingSenderId: "780003390677",
  appId: "1:780003390677:web:42a97385f29e55016cde5c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => 
signInWithPopup(auth, provider)
  .catch((error) => {
    alert("You are not logged in !");
  });
export const signOutaHere = () =>
signOut(auth).then(() => {
  console.log("Ur signed out");
})
  .catch((error) => {
    alert("You are not logged out !");
  });


export default app;