import { connect } from 'react-redux';
import {setCurrentCity} from "../actions";
import CityDropDown from "../components/CityDropDown";


function mapDispatchToProps(dispatch){
  return {
   set:function(temp){
     let action = setCurrentCity(txt);
     dispatch(action);
   }
  }
}

var label = connect(mapDispatchToProps);
var CityDropDownContainer = label(CityDropDown);
export default CityDropDownContainer;
