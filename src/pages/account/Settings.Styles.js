import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const SettingsStyles = StyleSheet.create({
  form: {
    flex: 1
  },
  listItem: {
    height: 42,
    paddingTop: 0,
    paddingBottom: 0,
    justifyContent: 'center'
  },
  rightTitle: {
    fontSize: 16,
    color: colors.$liRightTitleColor
  },
  rightIcon: {
    paddingRight: 10,
    color: colors.primaryColor
  }
});

export default SettingsStyles;
