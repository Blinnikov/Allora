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
}

const tabBarContainer = {
  ...fullHeightContainer,
  paddingBottom: sizes.tabBar
}

const navBarContainer = {
  ...fullHeightContainer,
  paddingTop: sizes.statusBar + sizes.navigationBar
}

const Common = StyleSheet.create({
  fullHeightContainer: {
    ...fullHeightContainer
  },
  pageContainer: {
    ...navBarContainer
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
  }
});

export default Common;
