import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Table, Row, Rows } from 'react-native-table-component';


const Statistics = () => {
    const [tableHead, setTableHead] = useState(['Move', 'White', 'Draw', 'Black']);
    const [tableData, setTableData] = useState([
        ['Nf3', '40%', '20%', '40%'],
        ['Bc4', '30%', '30%', '40%'],
        ['a4', '10%', '20%', '70%']
    ]);

    return (
        <View style={styles.container}>
            <Text style={styles.title} onPress={() => console.log(tableData)}>
              MOVES
            </Text>

            <Table borderStyle={{borderWidth: 2, borderColor: '#000000'}}>
              <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
              <Rows data={tableData} textStyle={styles.text}/>
            </Table>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 12,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold', 
    fontFamily: 'Arial', 
    fontSize: 36
  },
  head: { 
    height: 40, 
    backgroundColor: '#a9a9a9' 
  },
  text: { 
    margin: 6 
  }
});

export default Statistics;
