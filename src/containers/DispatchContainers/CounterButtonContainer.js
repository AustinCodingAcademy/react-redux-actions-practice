import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from "../../actions"
import CounterButton from "../../components/CounterButton";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    increase: increaseCounter,
    decrease: decreaseCounter 
  }
}

export default connect(mapStateToProps)(CounterButton);
