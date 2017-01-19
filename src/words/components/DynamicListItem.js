import React, { Component } from 'react';
import { Animated } from 'react-native';

class DynamicListItem extends Component {
  constructor(props) {
    super(props);

    this._defaultHeight = 70;
    this._defaultTransition = 250;

    this.state = {
      height: new Animated.Value(this._defaultHeight),
      opacity: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: this._defaultTransition
    }).start();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shouldRemove) {
      this._onRemove(nextProps.onDidRemove);
    } else {
      this._resetHeight();
    }
  }

  _onRemove(cb) {
    Animated.timing(this.state.height, {
      toValue: 0,
      duration: this._defaultTransition
    }).start(cb);
  }

  _resetHeight(){
    Animated.timing(this.state.height, {
      toValue: this._defaultHeight,
      duration: 0
    }).start();
  }

  render() {
    const { opacity, height } = this.state;
    return (
      <Animated.View
        style={{opacity, height}}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default DynamicListItem;
