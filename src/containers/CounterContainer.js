import { connect } from 'react-redux';
import Counter from './components/Counter';
import CounterButton from './components/CounterButton';
import {increaseCounter} from './actions';
import {decreaseCounter} from './actions';

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    count: state.currentCount
  }
}

export default connect(mapStateToProps)(Counter);
