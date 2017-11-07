import { connect } from 'react-redux';
import Counter from "../components/Counter";


function mapStateToProps(dispatch){
  return {
    count: state.currentCount
   }
}

var label = connect(mapStateToProps);
var CounterContainer = label(Counter);
export default CounterContainer;
