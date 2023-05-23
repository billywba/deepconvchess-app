import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

import axios from 'axios';

import Statistics from './Statistics';

function ScanBoard({ boardImage }) {

  const [results, setResults] = useState([]);

  const sendRequest = async (imageBase64) => {
    try {
      const requestData = {
        image: imageBase64
      };

      const response = await axios.post('http://10.148.130.210:5000/image/process', requestData);
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    sendRequest(boardImage.base64)
  }, [])

  return (
    <>
      { results.length > 0 ? (
          <Statistics results={results}/>
        ) : (
          <View style={styles.container}>
          <Text style={styles.title}>SCANNING BOARD</Text>
  
          <SafeAreaView>
            <Image style={styles.preview} source={boardImage} />
          </SafeAreaView>
        </View>
      )}
    </>
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
