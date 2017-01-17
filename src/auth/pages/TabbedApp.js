import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';

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
        <TabBarIOS.Item
          systemIcon='most-viewed'
          selected={this.state.selectedTab === 'words'}
          onPress={() => this.setTab('words')}
        >
          <GroceryApp />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon='recents'
          selected={this.state.selectedTab === 'calc'}
          onPress={() => this.setTab('calc')}
        >
          <ReactCalculator />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon='contacts'
          selected={this.state.selectedTab === 'account'}
          onPress={() => this.setTab('account')}
        >
          <AccountContainer />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

export default TabbedApp;
