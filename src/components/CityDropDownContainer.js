import {connect} from "react-redux";
import CityDropDown from "./CityDropDown";
import {setCurrentCity} from "../actions";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    set: (city) => {
      const action = setCurrentCity(city);
      dispatch(action);
    }
  };
};

const CityDropDownContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CityDropDown);

export default CityDropDownContainer;
