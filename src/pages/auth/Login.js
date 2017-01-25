import React, { Component } from 'react';
import { Text, View } from 'react-native';
import I18n from 'react-native-i18n';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { Sae } from 'react-native-textinput-effects';
import * as firebase from 'firebase';

import SignUp from './SignUp';
import MainPage from '../MainPage';

import CommonStyles from '../../styles/Common';
import PageStyles from './Login.Styles'

const primaryColor='#3498db';

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
        component: MainPage
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
      <View style={[
          CommonStyles.fullHeightContainer,
          PageStyles.loginPageContainer,
        ]}>
        <Sae
          label={I18n.t('auth.login.email')}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={primaryColor}
          labelStyle={{color: 'rgba(0, 0, 0, 0.5)'}}
          inputStyle={{color: 'black'}}
          onChangeText={email => this.setState({email})}
          autoCapitalize="none"
        />
        <Sae
          label={I18n.t('auth.login.password')}
          iconClass={FontAwesomeIcon}
          iconName={'key'}
          iconColor={primaryColor}
          labelStyle={{color: 'rgba(0, 0, 0, 0.5)'}}
          inputStyle={{color: 'black'}}
          onChangeText={password => this.setState({password})}
          password={true}
          autoCapitalize="none"
        />
        <Button
          title={I18n.t('auth.login.loginButton')}
          onPress={this.login.bind(this)}
          buttonStyle={[CommonStyles.buttonPrimary, CommonStyles.buttonLogin]}
          textStyle={CommonStyles.buttonPrimaryText}
        />
        <Button
          title={I18n.t('auth.login.goToSignUp')}
          onPress={this.goToSignUp.bind(this)}
          buttonStyle={[CommonStyles.buttonDefault, CommonStyles.buttonLogin]}
          textStyle={CommonStyles.buttonDefaultText}
        />
      </View>
    );
  }
}

export default Login;
