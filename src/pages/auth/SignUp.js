import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import I18n from 'react-native-i18n';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';
import { colors } from '../../constants';

import Login from './Login';
import MainPage from '../MainPage';

import PageStyles from './Login.Styles';
import CommonStyles from '../../styles/Common';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: true,
      email: '',
      password: ''
    };
  }

  async signUp() {
    try {
      this.setState({
        loaded: false
      });

      const { email, password } = this.state;
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      this.setState({
        email: '',
        password: '',
        loaded: true
      });

      // Navigate to home page, the user is auto logged in
      this.props.navigator.push({
        component: MainPage
      });
    } catch(error) {
      this.setState({
        loaded: true
      });
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
      <View style={[
          CommonStyles.fullHeightContainer,
          PageStyles.loginPageContainer
        ]}>
        <Sae
          label={I18n.t('auth.login.email')}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={colors.primaryColor}
          labelStyle={PageStyles.label}
          inputStyle={PageStyles.input}
          onChangeText={email => this.setState({email})}
          autoCapitalize="none"
        />
        <Sae
          label={I18n.t('auth.login.password')}
          iconClass={FontAwesomeIcon}
          iconName={'key'}
          iconColor={colors.primaryColor}
          labelStyle={PageStyles.label}
          inputStyle={PageStyles.input}
          onChangeText={password => this.setState({password})}
          password={true}
          autoCapitalize="none"
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
  navigator: PropTypes.object.isRequired
};

export default SignUp;
