import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAJrLz7gGzINzo4s_RksbauQoFsGUgJ8-I',
  authDomain: 'clonereddit.firebaseapp.com',
  databaseURL: 'https://clonereddit.firebaseio.com',
  projectId: 'clonereddit',
  storageBucket: 'clonereddit.appspot.com',
  messagingSenderId: '294064701545',
  appId: '1:294064701545:web:88a2cc6b9ed24008afa2f8',
  measurementId: 'G-TG9K7NXX9X',
};

firebase.initializeApp(firebaseConfig);
export default firebase;
