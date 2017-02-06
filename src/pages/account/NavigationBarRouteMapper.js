import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import NavBarStyles from '../../styles/NavigationBar';

/*eslint no-unused-vars: 0*/
const NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) => {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}>
        <View style={NavBarStyles.navBarLeftButton}>
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

  RightButton: (route, navigator, index, navState) => {
    return null;
  },

  Title: (route, navigator, index, navState) => {
    return (
      <Text style={[NavBarStyles.navBarText, NavBarStyles.navBarTitleText]}>
        {route.title || route.component.name}
      </Text>
    );
  },
};

export default NavigationBarRouteMapper;
