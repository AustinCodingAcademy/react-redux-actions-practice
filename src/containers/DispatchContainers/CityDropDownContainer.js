import { connect } from 'react-redux';
import { setCurrentCity } from "../../actions"
import CityDropDown from "../../components/CityDropDown";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    set: setCurrentCity 
  }
}

export default connect(mapStateToProps)(CityDropDown);
