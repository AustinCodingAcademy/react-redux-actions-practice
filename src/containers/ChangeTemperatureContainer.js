import ChangeTemperature from "../components/ChangeTemperature";
import {connect} from 'react-redux';
import {setTemp} from "../actions";


function mapDispatchToProps(dispatch) {
  return {
    set:function(temp) {
      let action = setTemp(temp);
      dispatch(action);
    }
  }
}
// using dispatch changes the data
const ChangeTemperatureContainer = connect(null, mapDispatchToProps)(ChangeTemperature);
export default ChangeTemperatureContainer
