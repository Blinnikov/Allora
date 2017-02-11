import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const WordListStyles = StyleSheet.create({
  listView: {
    flex: 1
  },
  li: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.$liBackgroundColor,
    borderColor: colors.$liBorderColor,
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
    color: colors.$liTitleColor,
    fontSize: 16
  },
  liSubtitle: {
    fontSize: 12,
    color: colors.$liSubtitleColor
  },
  action: {
    backgroundColor: colors.actionColor,
    borderColor: colors.transparent,
    borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 14,
    paddingBottom: 16
  },
  actionButtonsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  soundButtonIcon: {
    fontSize: 40,
    color: colors.primaryColor
  },
  actionButtonStyle: {
    fontSize: 32,
    alignSelf: 'center',
    paddingVertical: 19,
    color: colors.$actionButtonTextColor
  }
});

export default WordListStyles;
