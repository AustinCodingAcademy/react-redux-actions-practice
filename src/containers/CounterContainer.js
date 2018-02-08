import { connect } from 'react-redux';
import {setSpecialText} from "../actions";
import CurrentCity from "../components/CurrentCity";


function mapStateToProps(state){
  return {
   count: state.currentCount
   }
  }

export default connect(mapStateToProps, null)(CurrentCity);
