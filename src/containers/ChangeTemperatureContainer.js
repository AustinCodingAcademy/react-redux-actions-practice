import { connect } from 'react-redux';
import {setTemp} from "../actions";
import ChangeTemperature from "../components/ChangeTemperature";


function mapDispatchToProps(dispatch){
  return {
   set:function(e){
     let action = setTemp(e);
     dispatch(action);
   }
  }
}

const ChangeTemperatureContainer = connect(null,mapDispatchToProps)(ChangeTemperature);

export default ChangeTemperatureContainer