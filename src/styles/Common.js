import { StyleSheet } from 'react-native';
import { sizes, colors } from '../constants';

const button = {
  marginLeft: 0,
  marginRight: 0
};

const fullHeightContainer = {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: colors.bodyBackgroundColor,
  justifyContent: 'center'
};

const tabBarContainer = {
  ...fullHeightContainer,
  paddingBottom: sizes.tabBar
};

const navBarContainer = {
  ...fullHeightContainer,
  paddingTop: sizes.statusBar + sizes.navigationBar
};

const Common = StyleSheet.create({
  fullHeightContainer: {
    ...fullHeightContainer
  },
  pageContainer: {
    ...navBarContainer,
    ...tabBarContainer
  },
  buttonDefault: {
    ...button,
    backgroundColor: colors.transparent
  },
  buttonDefaultText: {
    color: colors.primaryColor,
    fontSize: 16
  },
  buttonPrimary: {
    ...button,
    backgroundColor: colors.primaryColor
  },
  buttonPrimaryText: {
    color: colors.$buttonPrimaryText,
    fontSize: 18
  },
  buttonLogin: {
    marginTop: 10
  }
});

export default Common;
