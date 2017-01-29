import { PushNotificationIOS } from 'react-native';
import * as database from '../firebase/database';
import { flags, intervals } from '../constants';

const getRandomMessage = () => {
  const { word, translation, lang } = database.getRandomWord();
  const flag = flags[lang];
  return `${flag} ${word} - ${translation}`;
}

const scheduleNotifications = (count = 64, interval = 1, intervalType = 'minute') => {
  const intervalValue = interval * intervals[intervalType];
  let currentTimeToSchedule = (new Date()).getTime() + 10 * intervals.second;

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

const cancelScheduledNotifications = () => {
  PushNotificationIOS.getScheduledLocalNotifications(response => {
    console.log('Scheduled', response);
  })
  PushNotificationIOS.cancelAllLocalNotifications();
  PushNotificationIOS.getScheduledLocalNotifications(response => {
    console.log('After cancelling', response);
  })
}

const run = () => {
  cancelScheduledNotifications();
  scheduleNotifications(5, 1, 'minute');
};

export { getRandomMessage, run };
