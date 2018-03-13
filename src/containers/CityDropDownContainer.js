import CityDropDown from "../components/CityDropDown";
import { connect } from "react-redux";
import { setCurrentCity } from "../actions";

// map set to setCurrentCity

function mapDispatchToProps(dispatch){
  return {
    set: function(city){
      let action = setCurrentCity(city);
      dispatch(action);
    }
  }
}

// export connect (null, MDTP)(CityDropDown)
export default connect(null, mapDispatchToProps)(CityDropDown);
