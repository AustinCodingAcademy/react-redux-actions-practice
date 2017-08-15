import {connect} from "react-redux";
import CityDropDown from "../components/CityDropDown";
import {currentCity} from "../actions";

function mapDispatchToProps(dispatch){
  return {
    set: function(city){
      var action = currentCity(city);
      dispatch(action);
    }
  }
}
export default connect(null, mapDispatchToProps)(CityDropDown);