import { StatusBar } from 'expo-status-bar';
import React from 'react';
//expo install react-native-safe-area-context 설치 후에!
// import { SafeAreaView } from 'react-native-safe-area-context'; 왜 안될까요... 밑에 포함시키니 되네요 why?
import { FlatList,SafeAreaView,Image, StyleSheet,Text, ScrollView,View  } from 'react-native';
// class CounterButton extends React.Component {
//   static defaultProps = {
//     // 초기값을 입력하지 않았을경우에 -1로 초기화
//     counter: -1,
//   };
//   constructor(props) {
//     super(props);

//     this.state = {
//       // 카운트 초기값 설정
//       counter: props.counter,
//     };
//   }

//   render() {
//     // 클릭할때 마다 COUNT가 하나씩 증가하는 함수 
//     const  clickHandler = () => {
//       this.setState({
//         counter : this.state.counter+1,
//       });
//     }
//     return (
//       <View style={styles.buttonContainer}>
//         <Text>{this.state.counter}</Text>
//         <Button title={'click me!'} onPress={clickHandler}/>
//       </View>
//     );
//   };
  
// };
export default class App extends React.Component {
  // fruits = [
  //   { name: 'Acai' },
  //   { name: 'Apples' },
  //   { name: 'Apricots' },
  //   { name: 'Avocado' },
  //   { name: 'Ackee' },
  //   { name: 'Bananas' },
  //   { name: 'Bilberries' },
  //   { name: 'Blueberries' },
  //   { name: 'Blackberries' },
  //   { name: 'Boysenberries' },
  //   { name: 'Bread fruit' },
  //   { name: 'Cantaloupes (cantalope)' },
  //   { name: 'Chocolate-Fruit' },
  //   { name: 'Cherimoya' },
  //   { name: 'Cherries' },
  //   { name: 'Cranberries' },
  //   { name: 'Cucumbers' },
  //   { name: 'Currants' },
  //   { name: 'Dates' },
  //   { name: 'Durian' },
  //   { name: 'Eggplant' },
  //   { name: 'Elderberries' },
  //   { name: 'Figs' },
  //   { name: 'Gooseberries' },
  //   { name: 'Grapes' },
  //   { name: 'Grapefruit' },
  //   { name: 'Guava' },
  //   { name: 'Honeydew melons' },
  //   { name: 'Horned melon (Kiwano)' },
  //   { name: 'Huckleberries' },
  //   { name: 'Ita Palm' },
  //   { name: 'Jujubes' },
  //   { name: 'Kiwis' },
  //   { name: 'Durian is an unusual tropical fruit.' },
  //   { name: 'Kumquat' },
  //   { name: 'Lemons' },
  //   { name: 'Limes' },
  //   { name: 'Lychees' },
  //   { name: 'Mangos' },
  //   { name: 'Mangosteen' },
  //   { name: 'Mulberries' },
  //   { name: 'Muskmelon' },
  //   { name: 'Nectarines' },
  //   { name: 'Ogden melons' },
  //   { name: 'Olives' },
  //   { name: 'Oranges' },
  //   { name: 'Papaya' },
  //   { name: 'Passion fruit' },
  //   { name: 'Peaches' },
  //   { name: 'Pears' },
  //   { name: 'Peppers' },
  //   { name: 'Persimmon' },
  //   { name: 'Pineapple' },
  //   { name: 'Plums' },
  //   { name: 'Pluot' },
  //   { name: 'Pomegranate' },
  //   { name: 'Prickly Pear' },
  //   { name: 'Quince' },
  //   { name: 'Rambuton' },
  //   { name: 'Raspberries' },
  //   { name: 'Rose Apple' },
  //   { name: 'Starfruit' },
  //   { name: 'Sapadilla' },
  //   { name: 'Strawberries' },
  //   { name: 'Tamarind' },
  //   { name: 'Tangelo' },
  //   { name: 'Tangerines' },
  //   { name: 'Tomatoes' },
  //   { name: 'Ugli fruit' },
  //   { name: 'Voavanga (Spanish Tamarind)' },
  //   { name: 'Watermelons' },
  //   { name: 'Xigua melon' },
  //   { name: 'Yellow watermelon' },
  //   { name: 'Zucchini' },
  // ];
  componentDidMount() {
    fetch('https://raw.githubusercontent.com/example0312/weather-crawler/e3168f2b4e316691f8ab385f738783976eef7f0d/availableCityNames')
      .then(response => response.json())
      .then(console.log);
  }
  renderItem({ name }) {  //아이템을 받아와 렌더링
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{name}</Text>
      </View>
    );
  }
  render() {
    return (
      <SafeAreaView style={styles.fullscreen}>
        {/* <ScrollView style={styles.container}> // 과일 리스트를 랜더링
          {this.fruits.map(this.renderItem)}
        </ScrollView> */}
        {/* FlatList :  많은 양의 스크롤이 필요한 리스트 아이템을 보여주고자 할 때 쓰이는 리액트네이티브 컴포넌트, map과 비슷하다. */}
        <FlatList style={styles.container}  
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => this.renderItem(item)}
          data={this.fruits}
        />
      </SafeAreaView>
    );  
  }
}
const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth:2,
    borderColor: 'red',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // borderWidth:2,
    // borderColor: 'red',
    // // alignItems: 'stretch',  //? 위아래 꽉차게..?
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'row', //일렬로 나열하게 배치 뺴면 위아래로 배치된다. 
  },
  
  // buttonContainer : {
  //   alignItems: 'center',
  //   width: '100%',
  //   borderWidth: 2,
  //   borderColor: 'purple',
  // },
  item: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'orange',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  // text2 : {
  //   flex:2,   //flex 1, flex1, flex2가 있다면 4만큼의 고간에서 2는 2만큼의 공간을 차지하게 한다. 
  // },
});
