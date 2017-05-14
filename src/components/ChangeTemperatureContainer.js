import {connect} from "react-redux";
import {setTemp} from "../actions";
import ChangeTemperature from "./ChangeTemperature";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    set: (temp) => {
      const action = setTemp(temp);
      dispatch(action);
    }
  };
};

const ChangeTemperatureContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeTemperature);

export default ChangeTemperatureContainer;
