import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import I18n from 'react-native-i18n';
import UserSettings from '../../services/UserSettings';

import CommonStyles from '../../styles/Common';
import PageStyles from './Settings.Styles';

const availableIntervals = ['1', '5', '10', '15', '30', '45', '60'];
const availableTypes = ['second', 'minute', 'hour', 'day'];

class SettingsInterval extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interval: '',
      intervalType: ''
    };
    this._fillInitialState();
  }

  async _fillInitialState() {
    const interval = await UserSettings.notificationsInterval;
    const intervalType = await UserSettings.notificationsIntervalType;
    this.setState({
      interval,
      intervalType
    });
  }

  _checkInterval(interval) {
    UserSettings.notificationsInterval = interval;
    this.setState({
      interval
    });
  }

  _checkIntervalType(intervalType) {
    UserSettings.notificationsIntervalType = intervalType;
    this.setState({
      intervalType
    });
  }

  render() {
    const { interval, intervalType } = this.state;
    const plural = interval === '1' ? 'sing' : 'pl';

    return (
      <View style={CommonStyles.pageContainer}>
        <View style={PageStyles.form}>
          <List>
            {
              availableIntervals.map(availableInterval => {
                const hideChevron = availableInterval !== interval;

                return (
                  <ListItem key={availableInterval}
                    title={availableInterval}
                    onPress={() => this._checkInterval(availableInterval)}
                    hideChevron={hideChevron}
                    rightIcon={{
                      name: 'ios-checkmark-outline',
                      type: 'ionicon',
                      style: PageStyles.rightIcon
                    }}
                    containerStyle={PageStyles.listItem}
                  />
                );
              })
            }
          </List>
          <List>
            {
              availableTypes.map(availableType => {
                const hideChevron = availableType !== intervalType;

                return (
                  <ListItem
                    key={availableType}
                    onPress={() => this._checkIntervalType(availableType)}
                    title={I18n.t(`settings.interval.${plural}.${availableType}`)}
                    hideChevron={hideChevron}
                    rightIcon={{
                      name: 'ios-checkmark-outline',
                      type: 'ionicon',
                      style: PageStyles.rightIcon
                    }}
                    containerStyle={PageStyles.listItem}
                  />
                );
              })
            }
          </List>
        </View>
      </View>
    );
  }
}

export default SettingsInterval;
