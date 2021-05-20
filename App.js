import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flexDirection: 'row',
      height: 100,
      padding:20,
      }}>
      <View style={{backgroundColor: 'blue', flex:0.3}}></View>
      <View style={{backgroundColor: 'red', flex:0.5}}></View>
      <Text>Hello, world!</Text>
      <Text style={styles.textBig}>Hello, world!</Text>
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
  textBig: {
    fontSize:32,
  },
  defaultText: {fontColor:'black'},
  headerText: {fontWeight:'bold'},
  title : {
      fontSize:19,
      fontWeight: 'bold',
  },
  activeTitle: {
      color: 'red',
  }
});
