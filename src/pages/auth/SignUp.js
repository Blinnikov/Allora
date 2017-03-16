import React, { Component, PropTypes } from 'react';
import { NavigationActions } from 'react-navigation';
import { Animated, Keyboard, KeyboardAvoidingView } from 'react-native';
import { authentication } from 'allora-core';
import I18n from 'react-native-i18n';
import { FormInput } from 'react-native-elements';
import { Button } from 'react-native-elements';

import PageStyles, { logoBigEdge, logoSmallEdge } from './Login.Styles';
import CommonStyles from '../../styles/Common';

// TODO: Check actual pixel density
const pixelDensity = 3;
const logo2x = require('../../img/Logo_2x.png');
const logo3x = require('../../img/Logo_3x.png');
const logoImg = pixelDensity === 3 ? logo3x : logo2x;

class SignUp extends Component {
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

  async signUp() {
    try {
      const { email, password } = this.state;
      await authentication.createUser(email, password);

      this.setState({
        email: '',
        password: '',
      });
    } catch (error) {
      alert(error.message);
    }
  }

  goToLogin() {
    this._goToRoute('Login');
  }

  _goToRoute(routeName) {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })],
    });
    this.props.navigation.dispatch(resetAction);
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
          title={I18n.t('auth.login.signUp')}
          onPress={this.signUp.bind(this)}
          buttonStyle={[CommonStyles.buttonPrimary, CommonStyles.buttonLogin]}
          textStyle={CommonStyles.buttonPrimaryText}
        />
        <Button
          title={I18n.t('auth.login.goToLogin')}
          onPress={this.goToLogin.bind(this)}
          buttonStyle={[CommonStyles.buttonDefault, CommonStyles.buttonLogin]}
          textStyle={CommonStyles.buttonDefaultText}
        />
      </KeyboardAvoidingView>
    );
  }
}

SignUp.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignUp;
