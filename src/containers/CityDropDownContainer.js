import {connect} from "react-redux";
import CityDropDown from "../components/CityDropDown";
import {setCurrentCity} from "../actions";

function mapDispatchToProps(dispatch){
  return {
    set: function(){
      var action = setCurrentCity();
      dispatch(action);
    }
  }
}
export default connect(null, mapDispatchToProps)(CityDropDown);