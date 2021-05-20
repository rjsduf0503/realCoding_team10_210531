import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class CounterButton extends React.Component {
  state = {
    counter :0,
  };

  render() {
    // 클릭할때 마다 COUNT가 하나씩 증가하는 함수 
    const  clickHandler = () => {
      this.setState({
        counter : this.state.counter+1,
      });
    }
    return (
      <View style={styles.container}>
        <Text>{this.state.counter}</Text>
        <Button title={'click me!'} onPress={clickHandler}/>
      </View>
    );
  };
  
};
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CounterButton />
        <CounterButton />
        <CounterButton />
        <CounterButton />
        <CounterButton />
        <StatusBar style="auto" />
      </View>
    );  
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
