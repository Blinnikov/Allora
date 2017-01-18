import { StyleSheet } from 'react-native';

const NavigationBar = StyleSheet.create({
  navBar: {
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderBottomColor: '#EEE',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#373E4D',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 20,
  },
  navBarRightButton: {
    paddingRight: 20,
  },
  navBarButtonText: {
    color: '#5890FF',
  },
  navBarButtonIcon: {
    fontSize: 24,
    marginVertical: 8
  }
});

export default NavigationBar;
