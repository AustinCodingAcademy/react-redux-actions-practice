import {connect} from "react-redux";
import ChangeTemperature from "./ChangeTemperature";
import {setTemp} from "../actions";

const mapStateToProps = state => {
  return {
    temp: state.currentTemp
  };    
};


const mapDispatchToProps = dispatch => {
  return {
    increase: () => {
      dispatch(setTemp());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeTemperature);
