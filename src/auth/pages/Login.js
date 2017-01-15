import React, { Component } from 'react';
import { AsyncStorage, Text, TextInput, View } from 'react-native';
import * as firebase from 'firebase';

import Button from '../components/Button';
import SignUp from './SignUp';
import AccountContainer from './AccountContainer';

import styles from '../styles/common-styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loaded: true
    }
  }

  async login() {
    this.setState({
      loaded: false
    });

    try {
      const { email, password } = this.state;
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.props.navigator.push({
        component: AccountContainer
      });
    } catch (e) {
      alert(e.message);
    } finally {
      this.setState({
        loaded: true
      });
    }
  }

  goToSignUp() {
    this.props.navigator.push({
      component: SignUp
    })
  }

  render() {
    return (
      <View style={styles.container}>
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
            text='Login'
            onPress={this.login.bind(this)}
            buttonStyles={styles.primaryButton}
            buttonTextStyles={styles.primaryButtonText}
          />
          <Button
            text='New here?'
            onPress={this.goToSignUp.bind(this)}
            buttonStyles={styles.transparentButton}
            buttonTextStyles={styles.transparentButtonText}
          />
        </View>
      </View>
    );
  }
}

export default Login;
