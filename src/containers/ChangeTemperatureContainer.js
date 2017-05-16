import { connect } from "react-redux";
import ChangeTemperature from "../components/ChangeTemperature";
import {changeTemp} from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        set: (val) => dispatch(changeTemp(val))
    }
}

const ChangeTemperatureContainer = connect(null, mapDispatchToProps)(ChangeTemperature);
export default ChangeTemperatureContainer;