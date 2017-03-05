import { StyleSheet } from 'react-native';
import { colors } from '../constants';

const button = {
  marginLeft: 0,
  marginRight: 0,
};

const Common = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.bodyBackgroundColor,
    justifyContent: 'center',
  },
  buttonDefault: {
    ...button,
    backgroundColor: colors.transparent,
  },
  buttonDefaultText: {
    color: colors.primaryColor,
    fontSize: 16,
  },
  buttonPrimary: {
    ...button,
    backgroundColor: colors.primaryColor,
  },
  buttonPrimaryText: {
    color: colors.$buttonPrimaryText,
    fontSize: 18,
  },
  buttonLogin: {
    marginTop: 10,
  },
});

export default Common;
