import { StyleSheet } from 'react-native';
import { colors } from '../constants'

const NavigationBar = StyleSheet.create({
  navBar: {
    backgroundColor: colors.barsBackgroundColor,
    borderWidth: 1,
    borderColor: colors.transparent,
    borderBottomColor: colors.$navBarBorderBottomColor,
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: colors.$navBarTitleTextColor,
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  navBarRightButton: {
    paddingRight: 20,
  },
  navBarButtonText: {
    color: colors.primaryColor,
  },
  navBarButtonIcon: {
    fontSize: 24,
    marginVertical: 8
  }
});

export default NavigationBar;
