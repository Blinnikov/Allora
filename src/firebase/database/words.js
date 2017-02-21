import { words as wordsRef} from './references';

const subscribe = (cb) => {
  const ref = wordsRef();
  if (!ref) {
    return;
  }

  ref.on('value', snap => {
    const items = [];
    snap.forEach(record => {
      const { word, translation, lang } = record.val();
      items.unshift({
        key: record.key,
        word,
        translation,
        lang,
        shouldRemove: false
      });
    });

    cb(items);
  });
};

const add = ({word = '', translation = '', lang}) => {
  wordsRef().push({
    word,
    translation,
    lang,
    added: Date.now()
  });
};

const update = (key, {word, translation, lang}) => {
  wordsRef().child(key)
    .update({
      word,
      translation,
      lang,
      updated: Date.now()
    });
};

const getRandom = () => {
  let result;

  wordsRef().on('value', snap => {
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

const remove = (key) => {
  wordsRef().child(key).remove();
};

export { subscribe, add, update, remove, getRandom };
