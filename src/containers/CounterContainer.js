import { connect } from 'react-redux';
import state from "../state";
import CurrentCity from "../components/CurrentCity";


function mapStateToProps(state){
  return {
   count: state.currentCount
   }
  }

export default connect(mapStateToProps, null)(CurrentCity);
