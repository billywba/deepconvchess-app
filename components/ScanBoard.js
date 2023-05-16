import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';


function ScanBoard({ boardImage }) {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>SCANNING BOARD</Text>

          <SafeAreaView>
            <Image style={styles.preview} source={boardImage} />
          </SafeAreaView>
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
  },
  preview: {
    alignSelf: 'stretch',
    // flex: 1,
    maxWidth: 300, 
    maxHeight: 300
  }
});

export default ScanBoard;
