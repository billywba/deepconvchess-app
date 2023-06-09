import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>DEEPCONVCHESS</Text>

            <TouchableOpacity>
              <Text style={styles.button} onPress={() => navigation.navigate("TakeImage")}>
                SCAN A BOARD
              </Text>
            </TouchableOpacity>
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
  title: {
    fontWeight: 'bold', 
    fontFamily: 'Arial', 
    fontSize: 36, 
    marginBottom: '30%'
  },
  button: {
    backgroundColor: '#d9d9d9',
    color: 'black',
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold'
  }
});

export default Home;
