import CurrentCity from "../components/CurrentCity";
import {connect} from 'react-redux';
import {setSpecialText} from "../actions";

function mapStateToProps (state) {
  return {
    text:state.currentCity
  }
}


const CurrentCityContainer = connect(mapStateToProps)(CurrentCity);
export default CurrentCityContainer
