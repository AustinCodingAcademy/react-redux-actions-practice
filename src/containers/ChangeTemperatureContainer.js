import { connect } from 'react-redux';
import { setTemp } from '../actions'
import ChangeTemperature from '../components/ChangeTemperature';

function mapDispatchToProps(state) {
  return {
    set: setTemp
  }
}

export default connect(mapDispatchToProps)(ChangeTemperature);
