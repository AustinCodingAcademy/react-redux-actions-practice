import {connect} from "react-redux";
import CityDropDown from "../components/CityDropDown";
import {setCurrentCity} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    set: function(text) {
      var action = setCurrentCity(text);
      dispatch(action);
    },
  }
}

var otherFunction = connect(null, mapDispatchToProps);
var CityDropDownContainer = otherFunction(CityDropDown)

export default CityDropDownContainer;
