import * as firebase from 'firebase';

class Firebase {
  static init() {
    return firebase.initializeApp({
      apiKey: 'AIzaSyAFYZpU99gMCgoYL8dMsp_iTupy1yq7lo4',
      authDomain: 'reactnativeplayground-a29b4.firebaseapp.com',
      databaseURL: 'https://reactnativeplayground-a29b4.firebaseio.com',
      storageBucket: 'reactnativeplayground-a29b4.appspot.com',
      messagingSenderId: '260721422581'
    });
  }
}

export default Firebase;
