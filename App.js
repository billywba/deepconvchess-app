import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontFamily: 'Arial', fontSize: 36, marginBottom: '30%'}}>DEEPCONVCHESS</Text>

      <TouchableOpacity>
        <Text style={styles.button}>SCAN A BOARD</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#d9d9d9',
    color: 'black',
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold'
  }
});
