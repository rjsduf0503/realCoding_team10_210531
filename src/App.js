import * as React from 'react';
import 'react-native-gesture-handler';

<<<<<<< HEAD

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import{
    HomeScreen,
    DetailScreen,
}from './screens';

export default class App extends React.Component {
    static Stack = createStackNavigator();
  render() {
      const Stack = App.Stack;

=======
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CityList from './screens/CityList';
import WeatherDetailScreen from './screens/WeatherDetailScreen';

const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        <CityList navigation={navigation} />
        <StatusBar style="auto" />
    </View>
    );

const DetailScreen = ({ navigation, route }) => (
    <View style={styles.container}>
      <WeatherDetailScreen navigation={navigation} route={route} />
      <StatusBar style="auto" />
    </View>
);

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class App extends React.Component {
  render() {
>>>>>>> 4281b9fc8ca4d098b954b1a2bfc4566d4f83a520
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: '지역 선택' }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ title: '날씨' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

