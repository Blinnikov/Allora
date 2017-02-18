import * as firebase from 'firebase';

const getItemsRef = () => {
  const user = firebase.auth().currentUser;
  if (!user) {
    return null;
  }

  const path = `/user/${user.uid}/items`;
  return firebase.database().ref(path);
};

export default getItemsRef;
