import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB6GyqsB9T3yYAfM-lwCnhVnaQGN1r-8Ug",
  authDomain: "meuapp-351e6.firebaseapp.com",
  databaseURL: "https://meuapp-351e6-default-rtdb.firebaseio.com",
  projectId: "meuapp-351e6",
  storageBucket: "meuapp-351e6.appspot.com",
  messagingSenderId: "899294164868",
  appId: "1:899294164868:web:f0e33fa9c41ce34e7d8fd1",
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export { firebase };