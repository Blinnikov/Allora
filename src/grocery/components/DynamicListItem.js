import React, { Component } from 'react';
import { Animated } from 'react-native';

class DynamicListItem extends Component {
  constructor(props) {
    super(props);

    this._defaultTransition = 250;
    this.state = {
      _rowOpacity: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(this.state._rowOpacity, {
      toValue: 1,
      duration: this._defaultTransition
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={{opacity: this.state._rowOpacity}}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default DynamicListItem;
