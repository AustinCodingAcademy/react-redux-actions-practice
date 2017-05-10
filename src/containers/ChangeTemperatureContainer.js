import {connect} from "react-redux";
import {setTemp} from "../actions";
import ChangeTemperature from "../components/ChangeTemperature";


function mapDispatchToProps(dispatch){
  return {
    set:function(int){
      let action = setTemp(int);
      dispatch(action);
    }
  }
}


const ChangeTemperatureContainer = connect(mapDispatchToProps)(ChangeTemperature);


export default ChangeTemperatureContainer
