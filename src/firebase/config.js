// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1hnMDMHc5Wikct5vn1bq4gPugj1dPJcE",
  authDomain: "firegram-dd1a8.firebaseapp.com",
  projectId: "firegram-dd1a8",
  storageBucket: "firegram-dd1a8.appspot.com",
  messagingSenderId: "985612619937",
  appId: "1:985612619937:web:d406212b5ef23f61c720e0",
  measurementId: "G-D5Y0VRGL83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const projectStorage = getStorage(app)
const db = getFirestore(app)

export {db, projectStorage}
