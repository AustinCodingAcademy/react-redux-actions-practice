import { connect } from 'react-redux';
import CityDropDown from "../components/CityDropDown";
import {currentCity} from "../actions/index"

//map a prop called text to the state specialText
const mapDispatchToProps = {
    set: currentCity
}

export default connect(null,mapDispatchToProps)(CityDropDown);
