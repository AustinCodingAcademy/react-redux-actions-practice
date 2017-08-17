import { connect } from 'react-redux';
import { setCurrentCity } from "../actions";
import CityDropDown from "../components/CityDropDown";


function mapDispatchToProps(dispatch) {
    return {
        set: function (txt) {
            let action = setCurrentCity(txt);
            dispatch(action);
        }
    }
}
var otherFunction = connect(null, mapDispatchToProps);
var CityDropDownContainer = otherFunction(CityDropDown);
export default CityDropDownContainer;
