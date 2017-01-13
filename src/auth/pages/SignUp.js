import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import * as firebase from 'firebase';

import Button from '../components/Button';
import Header from '../components/Header';
import Login from './Login';

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

  async signUp() {
    try {
      this.setState({
        loaded: false
      })

      const { email, password } = this.state;
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      this.setState({
        email: '',
        password: '',
        loaded: true
      });

      // Navigate to home page, the user is auto logged in
    } catch(error) {
      this.setState({
        loaded: true
      })
      alert(error.message);
    }
  }

  goToLogin() {
    this.props.navigator.push({
      component: Login
    });
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
