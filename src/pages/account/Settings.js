import React, { Component } from 'react';
import { Switch, Text, View } from 'react-native';
import { FormLabel, FormInput, List, ListItem } from 'react-native-elements';
import I18n from 'react-native-i18n';
import UserSettings from '../../services/UserSettings';
import * as Notifications from '../../services/Notifications';

import SettingsInterval from './Settings.Interval'
import SettingsIntervalType from './Settings.IntervalType'

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
    if (!value) {
      Notifications.cancellAll();
    }
  }

  _goToSettingsInterval() {
    const { navigator } = this.props;
    navigator.push({
      component: SettingsInterval
    });
  }

  _goToSettingsIntervalType() {
    const { navigator } = this.props;
    navigator.push({
      component: SettingsIntervalType
    });
  }

  render() {
    const { enableNotifications } = this.state;
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
          {
            enableNotifications && (
              <List>
                <ListItem
                  title={'Repeat interval'}
                  onPress={() => this._goToSettingsInterval()}
                />
                <ListItem
                  title={'Interval type'}
                  onPress={() => this._goToSettingsIntervalType()}
                />
              </List>
            )
          }
        </View>
      </View>
    );
  }
}

export default Settings;
