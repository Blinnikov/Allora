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
      navigationOptions: {
        header: (props, defaultHeader) => {
          return {
            ...defaultHeader,
            title: I18n.t('words.list.title')
          };
        }
      }
    },
    WordAdd: {
      screen: WordAdd,
      navigationOptions: {
        header: ({ state }) => {
          // get the "deepest" current params.
          const currentParams = getCurrentParams(state);
          const { right } = currentParams.header || {};
          return {
            title: I18n.t('words.form.addTitle'),
            right
          };
        }
      }
    },
    WordEdit: {
      screen: WordEdit,
      navigationOptions: {
        header: ({ state }) => {
          const currentParams = getCurrentParams(state);
          const { right } = currentParams.header || {};
          return {
            title: I18n.t('words.form.editTitle'),
            right
          };
        }
      }
    }
  },
  {
    // headerMode: 'screen',
  }
);

export default WordsTabStack;
