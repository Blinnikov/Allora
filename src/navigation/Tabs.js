import React from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import I18n from 'react-native-i18n';

import WordsTab from '../pages/words/components/WordsTab';
import AccountTab from '../pages/account/AccountTab';

/* eslint react/prop-types: 0 */
const Tabs = TabNavigator({
  WordsTab: {
    screen: WordsTab,
    navigationOptions: {
      tabBar: () => ({
        label: I18n.t('words.tab'),
        icon: ({focused, tintColor}) => (
          <Icon
            name={focused ? 'ios-list-box' : 'ios-list-box-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        )
      })
    }
  },
  AccountTab: {
    screen: AccountTab,
    navigationOptions: {
      tabBar: () => ({
        label: I18n.t('account.tab'),
        icon: ({focused, tintColor}) => (
          <Icon
            name={focused ? 'ios-contact' : 'ios-contact-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        )
      })
    }
  }
});

const TabsWrapper = ({ navigator }) => (
  <Tabs screenProps={{rootNavigator: navigator}} />
);

export default TabsWrapper;
