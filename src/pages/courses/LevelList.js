import React, { Component } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import CommonStyles from '../../styles/Common';

class LevelList extends Component {
  render() {
    if (this.state.loading) {
      return (
        <ActivityIndicator size="large" style={CommonStyles.pageContainer} />
      );
    }

    return (
      <View>
        <Text>Levels</Text>
      </View>
    );
  }
}

export default LevelList;
