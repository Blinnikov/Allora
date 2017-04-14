import { StackNavigator } from 'react-navigation';
import I18n from 'react-native-i18n';

import WordList from '../pages/words/WordList';
import WordAdd from '../pages/words/WordAdd';
import WordEdit from '../pages/words/WordEdit';

const getCurrentParams = state => {
  if (state.routes) {
    return getCurrentParams(state.routes[state.index]);
  }
  return state.params || {};
};

const WordsTabStack = StackNavigator(
  {
    WordList: {
      screen: WordList,
      navigationOptions: (props, defaultHeader) => ({
        ...defaultHeader,
        headerTitle: I18n.t('words.list.title'),
      }),
    },
    WordAdd: {
      screen: WordAdd,
      navigationOptions: ({ navigation }) => {
        // get the "deepest" current params.
        const currentParams = getCurrentParams(navigation.state);
        const headerRight = currentParams.headerRight;
        return {
          headerTitle: I18n.t('words.form.addTitle'),
          headerRight,
        };
      },
    },
    WordEdit: {
      screen: WordEdit,
      navigationOptions: ({ navigation }) => {
        const currentParams = getCurrentParams(navigation.state);
        const headerRight = currentParams.headerRight;
        return {
          headerTitle: I18n.t('words.form.editTitle'),
          headerRight,
        };
      },
    },
  },
  {
    // headerMode: 'screen',
  },
);

export default WordsTabStack;
