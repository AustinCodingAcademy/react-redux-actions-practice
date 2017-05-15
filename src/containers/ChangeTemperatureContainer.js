import {connect} from 'react-redux';
import {setTemp} from '../actions';
import ChangeTemperature from "../components/ChangeTemperature";


const mapDispatchToProps = dispatch => {
  return {
    set: (temp) => {
      const action = setTemp(temp);
      dispatch(action);
    }
  };
};



const ChangeTemperatureContainer = connect(null, mapDispatchToProps)(ChangeTemperature);
export default ChangeTemperatureContainer
