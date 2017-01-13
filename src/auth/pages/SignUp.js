import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

import Button from '../components/Button';
import Header from '../components/Header';

import styles from '../styles/common-styles';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: true,
      email: '',
      password: ''
    }
  }

  signUp() {

  }

  goToLogin() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Header text='SignUp' loaded={this.state.loaded} />
        <View style={styles.body}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({email: text})}
            value={this.state.email}
            placeholder={'Email Address'}
          />
          <TextInput
            style={styles.textInput}
            value={this.state.password}
            onChangeText={text => this.setState({password: text})}
            placeholder={'Password'}
            secureTextEntry={true}
          />
          <Button
            text='SignUp'
            onPress={this.signUp.bind(this)}
            button_styles={styles.primary_button}
            button_text_styles={styles.primary_button_text}
          />
          <Button
            text='Got an Account?'
            onPress={this.goToLogin.bind(this)}
            button_styles={styles.transparent_button}
            button_text_styles={styles.transparent_button_text}
          />
        </View>
      </View>
    );
  }
}

export default SignUp;
