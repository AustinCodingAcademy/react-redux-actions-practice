import {setCurrentCity} from "../actions";
import {connect} from "react-redux";
import CityDropDown from "../components/CityDropDown";

function mapDispatchToProps(dispatch) {
  return{
    set: function(city){
      let action = setCurrentCity(city);
      dispatch(action);
    }
  }
}

//This is the shorter way to export.
//export default connect(null,mapDispatchToProps)(CounterButton)

let otherFunction = connect(null, mapDispatchToProps);
let CityDropDownContainer = otherFunction(CityDropDown)
export default CityDropDownContainer;
