import {connect} from 'react-redux';
import {setCurrentCity} from '../actions';
import CityDropDown from "../components/CityDropDown";

const mapDispatchToProps = dispatch => {
  return {
    set: (city) => {
      const action = setCurrentCity(city);
      dispatch(action);
    }
  };
};

const CityDropDownContainer = connect(null, mapDispatchToProps)(CityDropDown);
export default CityDropDownContainer
