import * as firebase from 'firebase';

const getItemsRef = () => {
  const user = firebase.auth().currentUser;
  const path = `/user/${user.uid}/items`;
  return firebase.database().ref(path);
};

const addWordItem = ({word = '', translation = '', lang}) => {
  getItemsRef().push({
    word,
    translation,
    lang,
    added: Date.now()
  });
};

const updateWordItem = (key, {word, translation, lang}) => {
  getItemsRef().child(key)
    .update({
      word,
      translation,
      lang,
      updated: Date.now()
    });
};

const getRandomWord = () => {
  let result;

  getItemsRef().on('value', snap => {
    let i = 0;
    const rand = Math.floor(Math.random() * snap.numChildren());

    snap.forEach(record => {
      if (i === rand) {
        const { word, translation, lang } = record.val();
        result = {
          key: record.key,
          word,
          translation,
          lang,
        };
      }

      i++;
    });
  });

  return result;
};

export { getItemsRef, addWordItem, updateWordItem, getRandomWord };
