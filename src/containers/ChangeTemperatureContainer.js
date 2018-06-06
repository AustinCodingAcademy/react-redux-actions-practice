import { connect } from 'react-redux';
import { setTemp } from '../actions';
import ChangeTemperature from '../components/ChangeTemperature';

function mapDispatchToProps(dispatch) {
  return {
    set: function(temp) {
      let action = setTemp(Number(temp));
      dispatch(action);
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(ChangeTemperature);
