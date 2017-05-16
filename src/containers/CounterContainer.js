import Counter from "../components/Counter";
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {count: state.currentCount
  }
}

// you need both of these to make the counter work
const CounterContainer = connect(mapStateToProps)(Counter);
export default CounterContainer
