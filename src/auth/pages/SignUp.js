import React, { Component } from 'react';
import { Text, View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import Button from 'apsl-react-native-button';
import * as firebase from 'firebase';

import Login from './Login';
import AccountContainer from './AccountContainer';

import Styles from '../../Styles';

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
      this.props.navigator.push({
        component: AccountContainer
      });
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
      <View style={Styles.container}>
        <View style={Styles.body}>
          <Sae
            label={'Email Address'}
            iconClass={FontAwesomeIcon}
            iconName={'pencil'}
            iconColor={'#3498db'}
            labelStyle={{color: 'rgba(0, 0, 0, 0.5)'}}
            inputStyle={{color: 'black'}}
            onChangeText={email => this.setState({email})}
            autoCapitalize="none"
          />
          <Sae
            label={'Password'}
            iconClass={FontAwesomeIcon}
            iconName={'key'}
            iconColor={'#3498db'}
            labelStyle={{color: 'rgba(0, 0, 0, 0.5)'}}
            inputStyle={{color: 'black'}}
            onChangeText={password => this.setState({password})}
            password={true}
            autoCapitalize="none"
          />
          <Button
            text='SignUp'
            onPress={this.signUp.bind(this)}
            style={Styles.buttonPrimary}
            textStyle={Styles.buttonPrimaryText}
          >
            Sign Up
          </Button>
          <Button
            onPress={this.goToLogin.bind(this)}
            style={Styles.buttonDefault}
            textStyle={Styles.buttonDefaultText}
          >
            Got an Account?
          </Button>
        </View>
      </View>
    );
  }
}

export default SignUp;
