import { connect } from 'react-redux';
import {setCurrentUser} from "../actions";
import Counter from "../components/Counter";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    count: state.currentCount
  }
}

export default connect(mapStateToProps)(Counter);
