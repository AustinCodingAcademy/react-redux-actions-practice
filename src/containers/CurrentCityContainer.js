import { connect } from 'react-redux';
import CurrentCity from "../components/CurrentCity";


function mapStateToProps(dispatch){
  return {
    text: state.currentCity
   } 
}

var label = connect(mapStateToProps);
var CurrentCityContainer = label(CurrentCity);
export default CurrentCityContainer;
