import ChangeTemperature from '../components/ChangeTemperature';
import {setTemp} from '../actions';
import {connect} from 'react-redux';


function mapDispatchToProps(dispatch) {
  return {
    set: function(number) {
      dispatch(setTemp(number))
    }
  }
}

export default connect(null, mapDispatchToProps)(ChangeTemperature);
