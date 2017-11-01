import { connect } from 'react-redux';
import {setCurrentUser} from "../actions";
import Counter from "../components/Counter";


function mapStateToProps(state){
  return {
    count: state.currentCount
  }
}

export default connect(mapStateToProps)(Counter);
