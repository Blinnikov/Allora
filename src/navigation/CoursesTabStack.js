import { StackNavigator } from 'react-navigation';
import I18n from 'react-native-i18n';
import CourseList from '../pages/courses/CourseList';

const CoursesTabStack = StackNavigator({
  CourseList: {
    screen: CourseList,
    navigationOptions: {
      header: (props, defaultHeader) => {
        return {
          ...defaultHeader,
          title: I18n.t('courses.list.title'),
        };
      }
    }
  }
});

export default CoursesTabStack;
