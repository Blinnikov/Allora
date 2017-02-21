import * as firebase from 'firebase';

const words = () => {
  const user = firebase.auth().currentUser;
  if (!user) {
    return null;
  }

  const path = `/user/${user.uid}/words`;
  return firebase.database().ref(path);
};

export { words };
