import {connect} from 'react-redux';
import CounterButton from "../components/CounterButton";

function mapDispatchToProps(dispatch){
  return{
    increase:dispatch.increaseCounter,
    decrease:dispatch.decreaseCounter

  }
}

const CounterButtonContainer = connect(null, mapDispatchToProps)(CounterButton);
export default CounterButtonContainer
