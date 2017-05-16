import CityDropDown from "../components/CityDropDown";
import {connect} from 'react-redux';
import {setCurrentCity} from "../actions";


function mapDispatchToProps(dispatch) {
  return {
    set:function(city) {
      let action = setCurrentCity(city);
      dispatch(action);
    }
  }
}
// using dispatch changes the data
const CityDropDownContainer = connect(null, mapDispatchToProps)(CityDropDown);
export default CityDropDownContainer
