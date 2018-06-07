import { connect } from 'react-redux';
import {setTemp} from "../actions";
import ChangeTemperature from "../components/ChangeTemperature";


const mapDispatchToProps = (dispatch) => {
  return {
   set:function(temp){
     let action = setTemp(temp);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(ChangeTemperature);