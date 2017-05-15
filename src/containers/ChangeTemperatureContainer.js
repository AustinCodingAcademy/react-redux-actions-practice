import {connect} from 'react-redux';
import ChangeTemperature from "../components/ChangeTemperature";

function mapDispatchToProps(state){
  return{
    set:state.setTemp
  }
}

const ChangeTemperatureContainer = connect(mapDispatchToProps)(ChangeTemperature);
export default ChangeTemperatureContainer
