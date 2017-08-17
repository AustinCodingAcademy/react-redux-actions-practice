import { connect } from 'react-redux';
import CurrentCity from "../components/CurrentCity";

function mapStateToProps(state){
  return {
    text: state.currentCity
  }
}


var otherFunction = connect(mapStateToProps);
var CurrentCityContainer = otherFunction(CurrentCity);
export default CurrentCityContainer;