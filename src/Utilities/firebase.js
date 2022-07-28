// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6_FMbRGDrbvBMY11z-ZBNUXed3fKzbNI",
  authDomain: "newnysl.firebaseapp.com",
  projectId: "newnysl",
  storageBucket: "newnysl.appspot.com",
  messagingSenderId: "780003390677",
  appId: "1:780003390677:web:9bc0ab7d25aef8716cde5c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider)
  .catch((error) => {
    alert("You are not logged in !");
  });
export const signOut = () => auth.signOut(provider)
  .catch((error) => {
    alert("You are not logged out !");
  });

export default firebase;