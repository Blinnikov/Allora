import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import UserSettings from '../../services/UserSettings';

import CommonStyles from '../../styles/Common';
import PageStyles from './Settings.Styles';

const availableIntervals = ['1', '5', '10', '15', '30', '45', '60'];
const availableTypes = ['second', 'minute', 'hour', 'day'];

const checkIcon = <Icon name='ios-checkmark-outline' style={PageStyles.check} />;

class SettingsInterval extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interval: '',
      intervalType: ''
    };
    this._fillInitialState()
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
    return (
      <View style={CommonStyles.pageContainer}>
        <View style={PageStyles.form}>
          <List>
            {
              availableIntervals.map(availableInterval => {
                const label = availableInterval === interval
                  ? checkIcon
                  : null;

                return (
                  <ListItem key={availableInterval}
                    title={availableInterval}
                    onPress={() => this._checkInterval(availableInterval)}
                    hideChevron={true}
                    label={label}
                    containerStyle={PageStyles.listItem}
                  />
                );
              })
            }
          </List>
          <List>
            {
              availableTypes.map(availableType => {
                const label = availableType === intervalType
                  ? checkIcon
                  : null;

                return (
                  <ListItem
                    key={availableType}
                    onPress={() => this._checkIntervalType(availableType)}
                    title={availableType}
                    hideChevron={true}
                    label={label}
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
