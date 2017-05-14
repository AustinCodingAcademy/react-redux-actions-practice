import {connect} from "react-redux";
import CityDropDown from "./CurrentCity";
import {setCurrentCity} from "../actions";

const mapStateToProps = sate => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    set: (city) => {
      const action = setCurrentCity(city);
      dispatch(action);
    }
  };
};

const CityDropDownContainer = connect(
  mapDispatchToProps,
  mapDispatchToProps
)(CityDropDown);

export default CityDropDownContainer;
