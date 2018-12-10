import { connect } from 'react-redux';
import Counter from '../components/Counter'


function mapStateToProps(state){
    return{
      count: state.currentCount
    }
  }

  let CounterContainer = connect(mapStateToProps)(Counter);
   export default CounterContainer;