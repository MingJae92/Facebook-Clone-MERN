import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB1JXSK-TaSg1wMJHrfr7WyhC4dIN5POck",
  authDomain: "facebook-mern-e28f3.firebaseapp.com",
  projectId: "facebook-mern-e28f3",
  storageBucket: "facebook-mern-e28f3.appspot.com",
  messagingSenderId: "66582380488",
  appId: "1:66582380488:web:6535dd86ef506ea3164afd"  
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
   
   

