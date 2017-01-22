import { StyleSheet } from 'react-native';
import { sizes } from '../constants';

const button = {
  marginLeft: 0,
  marginRight: 0
};

const container = {
  flex: 1,
  paddingTop: sizes.statusBar,
  paddingBottom: sizes.tabBar,
  backgroundColor: '#f2f2f2',
  justifyContent: 'center'
};

const Common = StyleSheet.create({
  loginContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: sizes.statusBar,
    paddingBottom: sizes.tabBar
  },
  navigationContainer: {
    ...container,
    paddingTop: sizes.statusBar + sizes.navigationBar + 1
  },
  body: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  buttonDefault: {
    ...button,
    backgroundColor: 'transparent'
  },
  buttonDefaultText: {
    color: '#2980b9',
    fontSize: 16
  },
  buttonDefaultTextDestructive: {
    color: '#e74c3c',
    fontSize: 16,
    fontWeight: '500'
  },
  buttonPrimary: {
    ...button,

    borderColor: '#2980b9',
    backgroundColor: '#3498db'
  },
  buttonSuccess: {
    ...button,
    borderColor: '#27ae60',
    backgroundColor: '#2ecc71',
  },
  buttonPrimaryText: {
    color: '#FFF',
    fontSize: 18
  },
  buttonLogin: {
    marginTop: 10
  },

  // Account page
  accountContaniner: {
    flex: 1,
    justifyContent: 'space-between'
  },
  emailText: {
    fontSize: 18
  }
});

export default Common;
