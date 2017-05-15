import {connect} from "react-redux";
import ChangeTemperature from "./ChangeTemperature";


// actions 
import {
  setCurrentTemp
} from "../actions";

const mapStateToProps = state => {
  return {
    currentTemp: state.currentTemp
  };
};

const mapDispatchToProps = dispatch => {
  return {
    set: (temp) => {
      dispatch(setCurrentTemp(temp));
    }
  };
};

const ChangeTemperatureContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeTemperature);

export default ChangeTemperatureContainer;
