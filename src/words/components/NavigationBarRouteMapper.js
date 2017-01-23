import React from 'react';
import { Text, View,  StyleSheet, TouchableOpacity } from 'react-native';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/Ionicons';
import WordAdd from './WordAdd';

import { sizes } from '../../constants';

import NavBarStyles from '../../styles/NavigationBar';

const NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={NavBarStyles.navBarLeftButton}>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name='ios-arrow-back'
            style={[NavBarStyles.navBarButtonText, NavBarStyles.navBarButtonIcon]}
          />
          <Text style={[NavBarStyles.navBarText, NavBarStyles.navBarButtonText]}>
            {' '}{previousRoute.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={() => navigator.push({
          component: WordAdd,
          title: I18n.t('words.form.addTitle')
        })}
        style={NavBarStyles.navBarRightButton}>
        <Icon name='md-add' style={[
            NavBarStyles.navBarText,
            NavBarStyles.navBarButtonText,
            NavBarStyles.navBarButtonIcon
          ]}/>
      </TouchableOpacity>
    );
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[NavBarStyles.navBarText, NavBarStyles.navBarTitleText]}>
        {route.title || route.component.name}
      </Text>
    );
  },
};

export default NavigationBarRouteMapper;
