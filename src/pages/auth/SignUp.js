import React, { Component, PropTypes } from 'react';
import { NavigationActions } from 'react-navigation';
import { Image, View } from 'react-native';
import { authentication } from 'allora-core';
import I18n from 'react-native-i18n';
import { FormInput } from 'react-native-elements';
import { Button } from 'react-native-elements';

import PageStyles from './Login.Styles';
import CommonStyles from '../../styles/Common';

// TODO: For iPhone Plus - LogoBig, for others - Logo
const logoImg = require('../../img/LogoBig.png');

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
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
      <View style={[CommonStyles.pageContainer, PageStyles.loginPageContainer]}>
        <Image style={PageStyles.logoBig} source={logoImg} />
        <FormInput
          value={this.state.email}
          autoCapitalize="none"
          containerStyle={PageStyles.inputContainer}
          inputStyle={PageStyles.input}
          onChangeText={email => this.setState({ email })}
          placeholder={I18n.t('auth.login.email')}
          keyboardType='email-address'
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
      </View>
    );
  }
}

SignUp.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SignUp;
