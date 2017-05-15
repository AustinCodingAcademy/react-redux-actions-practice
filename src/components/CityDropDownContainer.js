import {connect} from "react-redux";
import CityDropDown from "./CityDropDown";


// actions 
import {
  setCurrentCity
} from "../actions";

const mapStateToProps = state => {
  return {
    currentCity: state.currentCity
  };
};

const mapDispatchToProps = dispatch => {
  return {
    set: (city) => {
      dispatch(setCurrentCity(city));
    }
  };
};

const CityDropDownContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CityDropDown);

export default CityDropDownContainer;
