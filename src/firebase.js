import firebase from 'firebase';
import { settings } from './settings';
console.log('settings', settings);

const config = {
  apiKey: settings.API_KEY,
  authDomain: settings.AUTH_DOMAIN,
  databaseURL: settings.DB_URL,
  storageBucket: settings.S_BUCKET,
  messagingSenderId: settings.MSG_SENDER_ID
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
