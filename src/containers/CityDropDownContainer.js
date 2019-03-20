import { connect } from 'react-redux';
import {setCurrentCity} from "../actions";
import CityDropDown from "../components/CityDropDown.js";


const mapDispatchToProps = {
   set:setCurrentCity
  }


export default connect(null,mapDispatchToProps)(CityDropDown);