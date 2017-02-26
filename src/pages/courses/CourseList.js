import React, { Component } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import CommonStyles from '../../styles/Common';

class CourseList extends Component {
  constructor(props) {
    super(props);

    this._data = null;

    this.state = {
      loading: true,
      // dataSource: new ListView.DataSource({
      //   rowHasChanged: (row1, row2) => row1 !== row2
      // })
    };
  }
  
  render() {
    if (this.state.loading) {
      return <ActivityIndicator
        size='large'
        style={CommonStyles.pageContainer}
      />;
    }

    return (
      <View>
        <Text>Courses</Text>
      </View>
    );
  }
}

export default CourseList;
