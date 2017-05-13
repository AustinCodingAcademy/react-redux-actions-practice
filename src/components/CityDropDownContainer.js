import {connect} from "react-redux";
import CityDropDown from "./CurrentCity";
import {setCurrentCity} from "../actions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    set: () => {
      const action = setCurrentCity();
      dispatch(action);
    }
  };
};

const CityDropDownContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CityDropDown);

export default CityDropDownContainer;
