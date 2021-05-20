import { StatusBar } from 'expo-status-bar';
import React from 'react';
//expo install react-native-safe-area-context 설치 후에!
// import { SafeAreaView } from 'react-native-safe-area-context'; 왜 안될까요... 밑에 포함시키니 되네요 why?
import { SafeAreaView,Image, StyleSheet,Text, ScrollView,View  } from 'react-native';
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
  render() {
    return (
      <SafeAreaView style={styles.fullscreen}>
        <ScrollView style={styles.container}>
          <View style={styles.item}>
              <Text style={styles.text}>Apple</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.text}>Banana</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.text}>Cherries</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.text}>Damson plum</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.text}>...</Text>
            </View>
        </ScrollView>
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
