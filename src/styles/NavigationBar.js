import { StyleSheet } from 'react-native';
import { colors } from '../constants';

const navBarButtonIcon = {
  fontSize: 24,
  marginVertical: 8,
  color: colors.primaryColor
};

const NavigationBar = StyleSheet.create({
  navBarRightButton: {
    paddingRight: 10
  },
  navBarRightButtonIcon: {
    ...navBarButtonIcon,
    paddingRight: 20
  }
});

export default NavigationBar;
