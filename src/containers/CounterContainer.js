import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from "../actions";
import Counter from "../components/Counter";

function mapStateToProps(state){
  return {
    count: state.currentCount
    //look at reducers
  }
}

export default connect(mapStateToProps)(Counter);