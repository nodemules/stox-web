import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCxIEar678RLFlcNtB3eV7SqIWG_BQ871c",
    authDomain: "stox-54139.firebaseapp.com",
    databaseURL: "https://stox-54139-default-rtdb.firebaseio.com",
    projectId: "stox-54139",
    storageBucket: "stox-54139.appspot.com",
    messagingSenderId: "684436213227",
    appId: "1:684436213227:web:be6157a0d4e88535825dae",
    measurementId: "G-X7FFXK0Q9D"
};
firebase.initializeApp(config);

export default firebase;
