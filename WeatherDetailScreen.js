import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const API_KEY = '{0769b09df9a71d9d76ec1756ade964e4}'; //여기에 API 키 값 받아서 넣으세요
const queryUrl = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0769b09df9a71d9d76ec1756ade964e4`
//const queryUrl = (city) => `https://api.openweathermap.org/data/2.5/weather?q${city}&appid=${API_KEY}`

export default class WeatherDetailScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const {
      route: {
        params: { city },
      },
    } = this.props;

    fetch(queryUrl(city))
      .then(response => response.json())
      .then(info => {
        console.log(info);
        this.setState({
          ...info,
          isLoading: false,
        });
      });
  }

  render() {
      const {
        route: {
          params: { city },
        },
        navigation,
      } = this.props;

      navigation.setOptions({ title: `Weather Information: ${city}` });

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text>데이터를 불러오는 중입니다.</Text>
        </View>
      )
    }
//    console.log(this.state.main.temp);
    let celsius = this.state.main.temp - 273.15;

    return (
      <View style={styles.container}>
        <Text>온도: {celsius.toFixed(1)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});