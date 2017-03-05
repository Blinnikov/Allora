import { StackNavigator } from 'react-navigation';
import I18n from 'react-native-i18n';

import Account from '../pages/account/Account';
import Settings from '../pages/account/Settings';
import SettingsInterval from '../pages/account/Settings.Interval';

const AccountTabStack = StackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        header: {
          visible: false,
          title: I18n.t('account.title'),
        },
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        header: {
          title: I18n.t('settings.title'),
        },
      },
    },
    SettingsInterval: {
      screen: SettingsInterval,
      navigationOptions: {
        header: {
          title: I18n.t('settings.interval.title'),
        },
      },
    },
  },
  {
    // headerMode: 'screen',
  },
);

export default AccountTabStack;
