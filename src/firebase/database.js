import * as firebase from 'firebase';

const getItemsRef = () => {
  const user = firebase.auth().currentUser;
  const path = `/user/${user.uid}/items`;
  return firebase.database().ref(path);
}

export { getItemsRef };
