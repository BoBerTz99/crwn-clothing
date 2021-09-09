import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCbjZ80KHzHhiugalCgAvLkSiJoAaPvf34",
    authDomain: "crwn-db-10519.firebaseapp.com",
    projectId: "crwn-db-10519",
    storageBucket: "crwn-db-10519.appspot.com",
    messagingSenderId: "880098689322",
    appId: "1:880098689322:web:6c50b765ae125d35ec9e53",
    measurementId: "G-PP5JTW6DQ5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;