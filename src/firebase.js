import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD9qDgfRFxjcwzzzYewIJNOidQM4qbo-KM",
    authDomain: "snapchat-clone-3f9ec.firebaseapp.com",
    projectId: "snapchat-clone-3f9ec",
    storageBucket: "snapchat-clone-3f9ec.appspot.com",
    messagingSenderId: "422735858614",
    appId: "1:422735858614:web:7151cb1b8d499ffdfe0f17"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth(); 

  const storage = firebase.storage();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider };

