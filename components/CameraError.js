import { StyleSheet, Text, View } from 'react-native';

function CameraError() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>UNABLE TO FIND CAMERA</Text>
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

export default CameraError;
