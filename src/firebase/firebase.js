import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD6qHWEA_YPVXAZsTWAm_NTEf2noDg1EU4",
    authDomain: "todo-app-cec3c.firebaseapp.com",
    databaseURL: "https://todo-app-cec3c.firebaseio.com",
    projectId: "todo-app-cec3c",
    storageBucket: "todo-app-cec3c.appspot.com",
    messagingSenderId: "268233373868"
  };

firebase.initializeApp(config);

export const database = firebase.database();
