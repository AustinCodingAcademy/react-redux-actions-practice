import { connect } from 'react-redux';
import { setCurrentCity } from '../actions';
import CityDropDown from '../components/CityDropDown';

function mapDispatchToProps(dispatch) {
  return {
    set: function(city) {
      let action = setCurrentCity(city);
      dispatch(action);
    }
  };
}
const CityDropDownContainer = connect(null, mapDispatchToProps)(CityDropDown);
export default CityDropDownContainer;
