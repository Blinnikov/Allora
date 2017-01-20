import { StyleSheet } from 'react-native';
import { sizes, colors } from '../../constants';

const WordListStyles = StyleSheet.create({
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
  liIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  liIconText: {
    fontSize: 34
  },
  liTitle: {
    color: '#333',
    fontSize: 16
  },
  liSubtitle: {
    fontSize: 12,
    color: '#888'
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
  soundButtonIcon: {
    fontSize: 40,
    borderColor: 'blue',
    color: '#5890FF'
  },
  removeButtonStyle: {
    fontSize: 32,
    alignSelf: 'center',
    paddingVertical: 19,
    color: '#FFF'
  }
});

export default WordListStyles;
