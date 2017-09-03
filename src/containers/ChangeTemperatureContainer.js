import ChangeTemperature from '../components/ChangeTemperature';
import {setTemp} from "../actions";
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch){
  return {
    set: function(temp) {
      let action = setTemp(temp);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeTemperature);

