import { connect } from 'react-redux';
import Thermostat from "../components/Thermostat";

function mapStateToProps(state) {
    return {
        temp: parseInt(state.currentTemp, 10)
    }
}

export default connect(mapStateToProps)(Thermostat);