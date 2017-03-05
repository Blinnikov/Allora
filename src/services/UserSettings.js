import UserDefaults from 'react-native-userdefaults-ios';

const enableNotificationsKey = 'settings.notifications.enable';
const notificationsIntervalKey = 'settings.notifications.interval';
const notificationsIntervalTypeKey = 'settings.notifications.intervalType';

const UserSettings = {
  get enableNotifications() {
    return UserDefaults.boolForKey(enableNotificationsKey);
  },
  set enableNotifications(value) {
    UserDefaults.setBoolForKey(value, enableNotificationsKey);
  },

  get notificationsInterval() {
    return UserDefaults.stringForKey(notificationsIntervalKey);
  },
  set notificationsInterval(value) {
    UserDefaults.setStringForKey(value, notificationsIntervalKey);
  },

  get notificationsIntervalType() {
    return UserDefaults.stringForKey(notificationsIntervalTypeKey);
  },
  set notificationsIntervalType(value) {
    UserDefaults.setStringForKey(value, notificationsIntervalTypeKey);
  },
};

export default UserSettings;
