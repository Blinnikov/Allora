import React, { Component } from 'react';
import { Switch, Text, View } from 'react-native';
import { FormLabel, FormInput, List, ListItem } from 'react-native-elements';
import I18n from 'react-native-i18n';
import UserSettings from '../../services/UserSettings';
import * as Notifications from '../../services/Notifications';

import SettingsInterval from './Settings.Interval';

import CommonStyles from '../../styles/Common';
import PageStyles from './Settings.Styles';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enableNotifications: false
    };

    this._loadSettings();
  }

  async _loadSettings() {
    const enableNotifications = await UserSettings.enableNotifications;
    const interval = await UserSettings.notificationsInterval;
    const intervalType = await UserSettings.notificationsIntervalType;

    this.setState({
      enableNotifications,
      interval,
      intervalType
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

  componentWillReceiveProps() {
    this._loadSettings();
  }

  _goToSettingsInterval() {
    const { navigator } = this.props;
    navigator.push({
      component: SettingsInterval,
      title: 'Interval Settings'
    });
  }

  render() {
    const { enableNotifications, interval, intervalType } = this.state;
    const message = interval && intervalType
                      ? `${interval} ${intervalType}`
                      : 'Not set';

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
                  title={'Repeat every'}
                  rightTitle={message}
                  rightTitleStyle={PageStyles.rightTitle}
                  onPress={() => this._goToSettingsInterval()}
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
