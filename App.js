import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const clickHandler = () => console.log('Clicked!');

  return (
    <View style={{flexDirection: 'row',
      height: 100,
      padding:20,
      }}>
      {/* <View style={{backgroundColor: 'blue', flex:0.3}}></View>
      <View style={{backgroundColor: 'red', flex:0.5}}></View>
      <Text>Hello, world!</Text>
      <Text style={[styles.textBig, styles.textRed]}>Hello, world!</Text> */}
      <Button title={'click me'} onPress={clickHandler}></Button>
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
});
