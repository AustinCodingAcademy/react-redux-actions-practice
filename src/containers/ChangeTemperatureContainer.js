import {connect} from 'react-redux';
import ChangeTemperature from "../components/ChangeTemperature";

function mapDispatchToProps(dispatch){
  return{
    set:dispatch.setTemp
  }
}

const ChangeTemperatureContainer = connect(null, mapDispatchToProps)(ChangeTemperature);
export default ChangeTemperatureContainer
