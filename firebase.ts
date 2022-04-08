import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCQ_YQ2U5AcHrl4rH1JoDb20gToz00MgME',
  authDomain: 'twitter-clone-f23f7.firebaseapp.com',
  projectId: 'twitter-clone-f23f7',
  storageBucket: 'twitter-clone-f23f7.appspot.com',
  messagingSenderId: '869732725933',
  appId: '1:869732725933:web:1558012621502c9625c224',
  measurementId: 'G-HY2S306DJJ',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export default app
export { db, storage }
