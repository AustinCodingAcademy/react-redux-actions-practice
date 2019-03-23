import { connect } from 'react-redux';
import {changeCity} from "../actions";
import CityDropDown from "../components/CityDropDown";


const mapDispatchToProps = {
   set:changeCity
  }


export default connect(null,mapDispatchToProps)(CityDropDown);
