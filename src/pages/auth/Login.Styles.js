import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../constants';

const window = Dimensions.get('window');
const logoBigEdge = 0.8 * window.width;
const logoSmallEdge = 0.4 * window.width;

const getImageStyle = (edge) => {
  return {
    height: edge,
    width: edge,
    alignSelf: 'center',
    marginBottom: 20,
  };
};

const style = StyleSheet.create({
  loginPageContainer: {
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logoBig: {
    ...getImageStyle(logoBigEdge)
  },
  logoSmall: {
    ...getImageStyle(logoSmallEdge)
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
