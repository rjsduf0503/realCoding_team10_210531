class CounterButton extends React.Component {
  static defaultProps = {
    // 초기값을 입력하지 않았을경우에 -1로 초기화
    counter: -1,
  };
  constructor(props) {
    super(props);

    this.state = {
      // 카운트 초기값 설정
      counter: props.counter,
    };
  }

  render() {
    // 클릭할때 마다 COUNT가 하나씩 증가하는 함수 
    const  clickHandler = () => {
      this.setState({
        counter : this.state.counter+1,
      });
    }
    return (
      <View style={styles.buttonContainer}>
        <Text>{this.state.counter}</Text>
        <Button title={'click me!'} onPress={clickHandler}/>
      </View>
    );
  };
  
};