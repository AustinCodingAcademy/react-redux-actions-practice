// Import connect
// import actions
// import the appropriate component
import { connect } from 'react-redux';
import { setCurrentCity } from "../actions";
import CityDropDown from "../components/CityDropDown";

// Create mapDispatchToProps
function mapDispatchToProps(dispatch){
  return {
   set:function(city){
     let action = setCurrentCity(city);
     dispatch(action);
   }
  }
}

//Connect component to mapDispatchToProps.  export Container.
export default connect(null,mapDispatchToProps)(CityDropDown);
