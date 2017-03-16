import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../constants';

const window = Dimensions.get('window');
export const logoBigEdge = 0.8 * window.width;
export const logoSmallEdge = 0.4 * window.width;

const style = StyleSheet.create({
  loginPageContainer: {
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  label: {
    color: colors.$loginLabelColor,
  },
  inputContainer: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 10,
  },
});

export default style;
