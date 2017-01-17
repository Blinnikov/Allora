import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import GroceryApp from '../../grocery/components/GroceryApp';
import ReactCalculator from '../../calculator/ReactCalculator';
import AccountContainer from './AccountContainer';

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
    return (
      <TabBarIOS>
        <Icon.TabBarItem
          title="Words"
          iconName='ios-list-box-outline'
          selectedIconName='ios-list-box'
          selected={this.state.selectedTab === 'words'}
          onPress={() => this.setTab('words')}
        >
          <GroceryApp />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title='Calculator'
          iconName='ios-calculator-outline'
          selectedIconName='ios-calculator'
          selected={this.state.selectedTab === 'calc'}
          onPress={() => this.setTab('calc')}
        >
          <ReactCalculator />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title='Account'
          iconName='ios-contact-outline'
          selectedIconName='ios-contact'
          selected={this.state.selectedTab === 'account'}
          onPress={() => this.setTab('account')}
        >
          <AccountContainer />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

export default TabbedApp;
