import firebase from 'firebase'

const config = {
  'apiKey': 'AIzaSyALHp8jF-Xrfea7hwgHPAoZ6OlVJCI24fE',
  'authDomain': 'slide-firebase.firebaseapp.com',
  'databaseURL': 'https://slide-firebase.firebaseio.com',
  'projectId': 'slide-firebase',
  'storageBucket': 'slide-firebase.appspot.com',
  'messagingSenderId': '485967813427',
  'appId': '1:485967813427:web:af4353a5c1de5ca94f3c46',
  'measurementId': 'G-EVBCQZ56J5',
};

firebase.initializeApp(config);

export var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('email');
provider.addScope('profile');

export const auth = firebase.auth();

export default firebase;
