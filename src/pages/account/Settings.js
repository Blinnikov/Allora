import React, { Component } from 'react';
import { Switch, Text, View } from 'react-native';
import { FormLabel, FormInput, List, ListItem } from 'react-native-elements';
import I18n from 'react-native-i18n';
import UserSettings from '../../services/UserSettings';

import CommonStyles from '../../styles/Common';
import PageStyles from './Settings.Styles';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enableNotifications: false
    };
    this.fillInitialState()
  }

  async fillInitialState() {
    const enableNotifications = await UserSettings.enableNotifications
    this.setState({
      enableNotifications
    });
  }

  async _toggleNotifications() {
    const { enableNotifications } = this.state
    const value = !enableNotifications;
    this.setState({
      enableNotifications: value
    });
    UserSettings.enableNotifications = value;
  }

  render() {
    return (
      <View style={CommonStyles.pageContainer}>
        <View style={PageStyles.form}>
          <List>
            <ListItem
              title={I18n.t('account.settings.enableNotifications')}
              hideChevron={true}
              label={
                <Switch
                  value={this.state.enableNotifications}
                  onValueChange={() => this._toggleNotifications()}
                />
              }
            />
          </List>
        </View>
      </View>
    );
  }
}

export default Settings;
