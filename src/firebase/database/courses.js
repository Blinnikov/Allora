import { courses as ref } from './references';

const remove = (key) => {
  ref().child(key).remove();
};

export { remove };
