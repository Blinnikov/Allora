import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import WordsTab from '../../words/components/WordsTab';
import Account from './Account';

class TabbedApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'words'
    };
  }

  setTab(tabId) {
    this.setState({
      selectedTab: tabId
    });
  }

  render() {
    const rootNavigator = this.props.navigator;
    return (
      <TabBarIOS>
        <Icon.TabBarItem
          title="Words"
          iconName='ios-list-box-outline'
          selectedIconName='ios-list-box'
          selected={this.state.selectedTab === 'words'}
          onPress={() => this.setTab('words')}
        >
          <WordsTab />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title='Account'
          iconName='ios-contact-outline'
          selectedIconName='ios-contact'
          selected={this.state.selectedTab === 'account'}
          onPress={() => this.setTab('account')}
        >
          <Account rootNavigator={rootNavigator} />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

export default TabbedApp;
