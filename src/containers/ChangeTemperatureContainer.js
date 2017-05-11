import { connect } from 'react-redux';
import ChangeTemperature from '../components/ChangeTemperature';
import {setTemp} from '../actions';

function mapDispatchToProps(dispatch){
  return {
    // returns an object that we call an action
    set:function(temp){
      let action = setTemp(temp);
      dispatch(action);
    }
  }
}

const ChangeTemperatureContainer = connect(mapDispatchToProps)(ChangeTemperatureContainer);

export default ChangeTemperatureContainer