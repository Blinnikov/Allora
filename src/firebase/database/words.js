import { words as ref } from './references';

const subscribe = (cb) => {
  const _ref = ref();
  if (!_ref) {
    return;
  }

  _ref.on('value', snap => {
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
  ref().push({
    word,
    translation,
    lang,
    added: Date.now()
  });
};

const update = (key, {word, translation, lang}) => {
  ref().child(key)
    .update({
      word,
      translation,
      lang,
      updated: Date.now()
    });
};

const getRandom = () => {
  let result;

  ref().on('value', snap => {
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
  ref().child(key).remove();
};

export { subscribe, add, update, remove, getRandom };
