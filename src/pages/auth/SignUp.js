import React, { Component, PropTypes } from 'react';
import { NavigationActions } from 'react-navigation';
import { View } from 'react-native';
import I18n from 'react-native-i18n';
import { FormInput } from 'react-native-elements';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';

import PageStyles from './Login.Styles';
import CommonStyles from '../../styles/Common';

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
      await firebase.auth().createUserWithEmailAndPassword(email, password);

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
        <FormInput
          value={this.state.email}
          autoCapitalize="none"
          containerStyle={PageStyles.inputContainer}
          inputStyle={PageStyles.input}
          onChangeText={email => this.setState({ email })}
          placeholder={I18n.t('auth.login.email')}
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
