import { StyleSheet } from 'react-native';
import { sizes, colors } from '../constants';

const container = {
  flex: 1,
  paddingTop: sizes.statusBar,
  paddingBottom: sizes.tabBar,
  backgroundColor: '#f2f2f2',
  justifyContent: 'center'
};

const styles = StyleSheet.create({
  container: {
    ...container,
    paddingTop: sizes.statusBar
  },
  navigationContainer: {
    ...container,
    paddingTop: sizes.statusBar + sizes.navigationBar + 1
  },
  listView: {
    flex: 1
  },
  li: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    backgroundColor: colors.actionColor,
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
  },
  actionButtonsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  actionButton: {
    marginLeft: 10,
    marginBottom: 0
  },
  addButton: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  }
});

export default styles;
