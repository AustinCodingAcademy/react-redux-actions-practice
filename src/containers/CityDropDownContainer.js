import {connect} from 'react-redux';
import CityDropDown from "../components/CityDropDown";

function mapDispatchToProps(state){
  return{
    set:state.setCurrentCity
  }
}

const CityDropDownContainer = connect(mapDispatchToProps)(CityDropDown);
export default CityDropDownContainer
