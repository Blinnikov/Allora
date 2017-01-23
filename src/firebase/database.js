import * as firebase from 'firebase';

const getItemsRef = () => {
  const user = firebase.auth().currentUser;
  const path = `/user/${user.uid}/items`;
  return firebase.database().ref(path);
}

const addWordItem = ({word = '', translation = '', lang}) => {
  getItemsRef().push({
    word,
    translation,
    lang,
    added: Date.now()
  });
}

const updateWordItem = (key, {word, translation, lang}) => {
  getItemsRef().child(key)
    .update({
      word,
      translation,
      lang,
      updated: Date.now()
    });
}

export { getItemsRef, addWordItem, updateWordItem };
