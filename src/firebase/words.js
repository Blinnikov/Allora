import reference from './reference';

const subscribe = (cb) => {
  const ref = reference();
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
  reference().push({
    word,
    translation,
    lang,
    added: Date.now()
  });
};

const update = (key, {word, translation, lang}) => {
  reference().child(key)
    .update({
      word,
      translation,
      lang,
      updated: Date.now()
    });
};

const getRandom = () => {
  let result;

  reference().on('value', snap => {
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
  reference().child(key).remove();
};

export { subscribe, add, update, remove, getRandom };
