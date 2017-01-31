import UserDefaults from 'react-native-userdefaults-ios';

const enableNotificationsKey = 'settings.enableNotifications'

const UserSettings = {
  get enableNotifications() {
    return UserDefaults.boolForKey(enableNotificationsKey)
  },
  set enableNotifications(value) {
    UserDefaults.setBoolForKey(value, enableNotificationsKey);
  }
};

export default UserSettings;
