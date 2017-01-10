import { StyleSheet } from 'react-native';
import constants from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center'
  },
  listView: {
    flex: 1
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16
  },
  actionText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default styles;
