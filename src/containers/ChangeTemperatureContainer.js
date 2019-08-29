import ChangeTemparature from '../components/ChangeTemperature';
import {connect} from 'react-redux';
import {setTemp} from '../actions';

const mapDispatchToProps = {
    set: setTemp
}

export default connect(null, mapDispatchToProps)(ChangeTemparature);
