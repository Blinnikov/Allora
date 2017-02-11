import React from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import I18n from 'react-native-i18n';

import WordsTabStack from './WordsTabStack';
import AccountTabStack from './AccountTabStack';

/* eslint react/prop-types: 0 */
const Tabs = TabNavigator({
  WordsTab: {
    screen: WordsTabStack,
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
    screen: AccountTabStack,
    navigationOptions: {
    tabBar: (params) => {
      return {
        label: I18n.t('account.tab'),
        icon: ({focused, tintColor}) => (
          <Icon
            name={focused ? 'ios-contact' : 'ios-contact-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
        visible: params.state.index <= 0
      };
    }
  }
}
}, {
  navigationOptions: {
     header: {
       visible: false,
     },
   },
 });

const TabsWrapper = ({ navigator }) => (
  <Tabs screenProps={{rootNavigator: navigator}} />
);

export default TabsWrapper;
