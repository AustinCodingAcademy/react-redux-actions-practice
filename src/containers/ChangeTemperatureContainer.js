import ChangeTemperature from '../components/ChangeTemperature';
import {setTemp} from "../actions";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
  return {
    set: function(temp) {
      let action = setTemp(temp);
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(ChangeTemperature);

