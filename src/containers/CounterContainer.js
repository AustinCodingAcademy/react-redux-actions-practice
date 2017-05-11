import { connect } from 'react-redux';
import Counter from '../components/Counter';

function mapStateToProps(state){
  return {
    count:state.currentCount
  }
}

const CounterContainer = connect(mapStateToProps)(CounterContainer);

export default CounterContainer