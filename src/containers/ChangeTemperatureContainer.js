import { connect } from "react-redux";
import ChangeTemperature from "../components/ChangeTemperature";
import { setCurrentTemp } from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        set: (temp) => {
            const action = setCurrentTemp (temp);
            dispatch(action);
  }
 } 
}

const ChangeTemperatureContainer = connect(null, mapDispatchToProps)(ChangeTemperature);

export default ChangeTemperatureContainer;