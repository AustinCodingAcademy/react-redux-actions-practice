import Thermostat from '../components/Thermostat';
import {connect} from 'react-redux';

const mapStateToProps = () => {
    return {
        temp: state.currentTemp
    }
}

export default connect(mapStateToProps)(Thermostat)
