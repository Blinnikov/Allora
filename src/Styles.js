import { StyleSheet } from 'react-native';

const button = {
  marginTop: 10,
  paddingLeft: 10,
  paddingRight: 10,
  marginBottom: 0,
  borderRadius: 0
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    // paddingTop: 64,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  buttonDefault: {
    // marginTop: 10,
    // padding: 15
    borderWidth: 0
  },
  buttonDefaultText: {
    color: '#2980b9',
    fontSize: 16
  },
  buttonDefaultTextDestructive: {
    color: '#e74c3c',
    fontSize: 16,
    fontWeight: '500'
  },
  buttonPrimary: {
    ...button,

    // padding: 15,
    borderColor: '#2980b9',
    backgroundColor: '#3498db',
  },
  buttonSuccess: {
    ...button,
    borderColor: '#27ae60',
    backgroundColor: '#2ecc71',
  },
  buttonPrimaryText: {
    color: '#FFF',
    fontSize: 18
  },
  buttonsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default Styles;
