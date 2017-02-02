import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const SettingsStyles = StyleSheet.create({
  form: {
    flex: 1
  },
  listItem: {
    height: 44,
    paddingTop: 12,
    paddingBottom: 12
  },
  rightTitle: {
    fontSize: 16,
    color: '#999'
  },
  check: {
    fontSize: 30,
    alignSelf: 'center',
    paddingRight: 10,
    color: colors.primaryColor
  }
});

export default SettingsStyles;
