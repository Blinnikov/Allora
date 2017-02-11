import React, { Component, PropTypes } from 'react';
import { Switch, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import I18n from 'react-native-i18n';
import UserSettings from '../../services/UserSettings';
import * as Notifications from '../../services/Notifications';

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
    const { enableNotifications } = this.state;
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
    const { navigation } = this.props;
    navigation.navigate('SettingsInterval');
  }

  render() {
    const { enableNotifications, interval, intervalType } = this.state;
    let message = I18n.t('settings.interval.notset');
    if (interval && intervalType) {
      const pl = interval === '1' ? 'sing' : 'pl';
      const intervalMessage = I18n.t(`settings.interval.${pl}.${intervalType}`);
      message = `${interval} ${intervalMessage}`;
    }

    return (
      <View style={CommonStyles.pageContainer}>
        <View style={PageStyles.form}>
          <List>
            <ListItem
              title={I18n.t('settings.enableNotifications')}
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
                  title={I18n.t('settings.repeat')}
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

Settings.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Settings;
