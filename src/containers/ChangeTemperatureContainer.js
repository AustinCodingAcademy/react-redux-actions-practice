import { connect } from 'react-redux';
import {setTemp} from '../actions';
import ChangeTemperature from "../components/ChangeTemperature";

function mapDispatchToProps(dispatch) {
  return {
   set: function(temp) {
     dispatch(setTemp(temp));
   },
  }
}

export default connect(null, mapDispatchToProps)(ChangeTemperature);
