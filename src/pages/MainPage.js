import React, { Component, PropTypes } from 'react';
import { TabBarIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import I18n from 'react-native-i18n';

import WordsTab from './words/components/WordsTab';
import AccountTab from './account/AccountTab';

class MainPage extends Component {
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
          title={I18n.t('words.tab')}
          iconName='ios-list-box-outline'
          selectedIconName='ios-list-box'
          selected={this.state.selectedTab === 'words'}
          onPress={() => this.setTab('words')}
        >
          <WordsTab />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title={I18n.t('account.tab')}
          iconName='ios-contact-outline'
          selectedIconName='ios-contact'
          selected={this.state.selectedTab === 'account'}
          onPress={() => this.setTab('account')}
        >
          <AccountTab rootNavigator={rootNavigator} />
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  }
}

MainPage.propTypes = {
  navigator: PropTypes.object.isRequired
}

export default MainPage;
