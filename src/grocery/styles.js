import { StyleSheet } from 'react-native';
import constants from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center'
  },
  listView: {
    flex: 1
  },
  statusBar: {
    backgroundColor: '#FFF',
    height: 22
  },
  navBar: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderBottomColor: '#EEE',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navBarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: '500'
  },
  li: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderBottomColor: '#EEE',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 14,
    paddingBottom: 16
  },
  liText: {
    color: '#333',
    fontSize: 16
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
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
