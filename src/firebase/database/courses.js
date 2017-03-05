import { courses as ref } from './references';

const add = course => {
  ref().push(course);
};

const update = (key, course) => {
  ref().child(key).update(course);
};

const remove = key => {
  ref().child(key).remove();
};

export { add, update, remove };
