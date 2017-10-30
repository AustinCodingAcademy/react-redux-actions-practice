import {connect} from 'react-redux';
import {setTemp} from '../actions';
import ChangeTemperature from '../components/Thermostat';

function mapDispatchToProps(dispatch) {
  return {
    set:function(theTemp){
      let action = setTemp(theTemp);
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(ChangeTemperature);
