import { connect } from 'react-redux';
import state from "../state";
import Counter from "../components/Counter";


function mapStateToProps(state){
  return {
   count: state.currentCount
   }
  }

export default connect(mapStateToProps, null)(Counter);
