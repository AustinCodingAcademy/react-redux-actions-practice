import {connect} from 'react-redux';
import CounterButton from "../components/CounterButton";

function mapDispatchToProps(state){
  return{
    increase:state.increaseCounter,
    decrease:state.decreaseCounter

  }
}

const CounterButtonContainer = connect(mapDispatchToProps)(CounterButton);
export default CounterButtonContainer
