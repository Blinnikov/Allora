import * as firebase from 'firebase';

const _userEntityRef = entity => {
  const user = firebase.auth().currentUser;
  if (!user) {
    return null;
  }

  const path = `/user/${user.uid}/${entity}`;
  return firebase.database().ref(path);
};

const words = () => {
  return _userEntityRef('words');
};

const courses = () => {
  return _userEntityRef('courses');
};

export { courses, words };
