import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Statistics = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MOVES</Text>
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
  }
});

export default Statistics;
