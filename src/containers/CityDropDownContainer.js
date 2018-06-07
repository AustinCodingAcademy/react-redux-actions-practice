import { connect } from 'react-redux';
import { setCurrentCity } from "../actions";
import CityDropDown from "../components/CityDropDown";


function mapDispatchToProps(dispatch){
  return {
   set:function(text){
     let action = setCurrentCity(text);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(CityDropDown);