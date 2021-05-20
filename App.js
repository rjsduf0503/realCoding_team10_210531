import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CityList from './CityList';
//expo install react-native-safe-area-context 설치 후에!
// import { SafeAreaView } from 'react-native-safe-area-context'; 왜 안될까요... 밑에 포함시키니 되네요 why?
import {SafeAreaView, StyleSheet   } from 'react-native';

export default class App extends React.Component {
  
  
  render() {
    return (
      <SafeAreaView style={styles.fullscreen}>
         <CityList/>
        
      </SafeAreaView>
    );  
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
