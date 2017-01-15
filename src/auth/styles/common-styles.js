import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1
  },
  transparentButton: {
    marginTop: 10,
    padding: 15
  },
  transparentButtonText: {
    color: '#0485A9',
    fontSize: 16
  },
  primaryButton: {
    margin: 10,
    padding: 15,
    backgroundColor: '#529ecc'
  },
  primaryButtonText: {
    color: '#FFF',
    fontSize: 18
  },
  image: {
    width: 100,
    height: 100
  },
  buttonsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default commonStyles;
