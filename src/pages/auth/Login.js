import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, Keyboard, KeyboardAvoidingView } from 'react-native';
import { authentication } from 'allora-core';
import { FormInput } from 'react-native-elements';
import I18n from 'react-native-i18n';
import { Button } from 'react-native-elements';

import CommonStyles from '../../styles/Common';
import PageStyles, { logoBigEdge, logoSmallEdge } from './Login.Styles';

// TODO: Check actual pixel density
const pixelDensity = 3;
const logo2x = require('../../img/Logo_2x.png');
const logo3x = require('../../img/Logo_3x.png');
const logoImg = pixelDensity === 3 ? logo3x : logo2x;

class Login extends Component {
  constructor(props) {
    super(props);

    this.imageHeight = new Animated.Value(logoBigEdge);
    this.state = {
      email: '',
      password: '',
    };

    this.keyboardWillShow = this.keyboardWillShow.bind(this);
    this.keyboardWillHide = this.keyboardWillHide.bind(this);
  }

  componentWillMount() {
    Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    Keyboard.removeListener('keyboardWillShow', this.keyboardWillShow);
    Keyboard.removeListener('keyboardWillHide', this.keyboardWillHide);
  }

  keyboardWillShow(event) {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: logoSmallEdge,
    }).start();
  }

  keyboardWillHide(event) {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: logoBigEdge,
    }).start();
  }

  async login() {
    try {
      const { email, password } = this.state;
      await authentication.login(email, password);
    } catch (e) {
      alert(e.message);
    }
  }

  goToSignUp() {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={[CommonStyles.pageContainer, PageStyles.loginPageContainer]}
      >
        <Animated.Image
          style={[PageStyles.logo, { height: this.imageHeight }]}
          source={logoImg}
        />
        <FormInput
          value={this.state.email}
          autoCapitalize="none"
          containerStyle={PageStyles.inputContainer}
          inputStyle={PageStyles.input}
          onChangeText={email => this.setState({ email })}
          placeholder={I18n.t('auth.login.email')}
          keyboardType="email-address"
        />
        <FormInput
          value={this.state.password}
          autoCapitalize="none"
          containerStyle={PageStyles.inputContainer}
          inputStyle={PageStyles.input}
          onChangeText={password => this.setState({ password })}
          placeholder={I18n.t('auth.login.password')}
          secureTextEntry
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
      </KeyboardAvoidingView>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
