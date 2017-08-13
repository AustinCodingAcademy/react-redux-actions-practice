import { connect } from 'react-redux';
import {increaseCounter} from "../actions";
import {decreaseCounter} from "../actions";
import Counter from "../components/Counter";

function mapStateToProps(state){
  return {
    count: state.currentCount
  }
}


export default connect(mapStateToProps,null)(Counter);
