import { PushNotificationIOS } from 'react-native';
import UserSettings from './UserSettings';
import * as database from '../firebase/database';
import { flags, intervals } from '../constants';

const getRandomMessage = () => {
  const { word, translation, lang } = database.getRandomWord();
  const flag = flags[lang];
  return `${flag} ${word} - ${translation}`;
}

const scheduleNotifications = (count = 64, interval = 1, intervalType = 'minute') => {
  const intervalValue = interval * intervals[intervalType];
  let currentTimeToSchedule = Date.now();

  for (var i = 0; i < count; i++) {
    currentTimeToSchedule += intervalValue;
    scheduleSporadicNotification(currentTimeToSchedule)
  }
};

const scheduleSporadicNotification = (date) => {
  PushNotificationIOS.scheduleLocalNotification({
    alertBody: getRandomMessage(),
    fireDate: date
  });
}

const cancellAll = () => {
  PushNotificationIOS.cancelAllLocalNotifications();
}

const schedule = async () => {
  const enableNotifications = await UserSettings.enableNotifications;
  if(!enableNotifications) {
    return;
  }

  cancellAll();
  scheduleNotifications(48, 30, 'minute');
};

export { getRandomMessage, schedule, cancellAll };
