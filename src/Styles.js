import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  display: {
    flex: 2,
    backgroundColor: '#193441'
  },
  buttons: {
    flex: 8,
    backgroundColor: '#3E606F'
  },


  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#91AA9D'
  },
  inputButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  },

  inputRow: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default Styles;
