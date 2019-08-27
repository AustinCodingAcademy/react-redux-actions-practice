import Thermostat from '../components/Thermostat';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        temp: state.currentTemp
    }
}

export default connect(mapStateToProps)(Thermostat)
