import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import I18n from 'react-native-i18n';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { Sae } from 'react-native-textinput-effects';
import * as firebase from 'firebase';
import { colors } from '../../constants';

import CommonStyles from '../../styles/Common';
import PageStyles from './Login.Styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  async login() {
    try {
      const { email, password } = this.state;
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      alert(e.message);
    }
  }

  goToSignUp() {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <View style={[CommonStyles.pageContainer, PageStyles.loginPageContainer]}>
        <Sae
          label={I18n.t('auth.login.email')}
          iconClass={FontAwesomeIcon}
          iconName={'pencil'}
          iconColor={colors.primaryColor}
          labelStyle={PageStyles.label}
          inputStyle={PageStyles.input}
          onChangeText={email => this.setState({ email })}
          autoCapitalize="none"
        />
        <Sae
          label={I18n.t('auth.login.password')}
          iconClass={FontAwesomeIcon}
          iconName={'key'}
          iconColor={colors.primaryColor}
          labelStyle={PageStyles.label}
          inputStyle={PageStyles.input}
          onChangeText={password => this.setState({ password })}
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

Login.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Login;
