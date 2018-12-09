
import { connect } from 'react-redux';
import {setCurrentCity} from "../actions";
import CityDropDown from "../components/CityDropDown";


function mapDispatchToProps(dispatch){
  return {
   set:function(e){
     let action = setCurrentCity(e);
     dispatch(action);
   }
  }
}

const CityDropDownContainer = connect(null,mapDispatchToProps)(CityDropDown);

export default CityDropDownContainer
