import {connect} from 'react-redux';
import CityDropDown from "../components/CityDropDown";

function mapDispatchToProps(dispatch){
  return{
    set:dispatch.setCurrentCity
  }
}

const CityDropDownContainer = connect(null, mapDispatchToProps)(CityDropDown);
export default CityDropDownContainer
