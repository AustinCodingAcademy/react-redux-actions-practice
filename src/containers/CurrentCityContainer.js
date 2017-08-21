import {connect} from "react-redux";
import CurrentCity from "../components/CurrentCity";

function mapStateToProps(state){
  return{
    text: state.currentCity
  }
}

//this is the shorter way to export:
//export default connect(mapStateToProps)(CurrentCity)

let otherFunction = connect(mapStateToProps);
let CurrentCityContainer = otherFunction(CurrentCity);
export default CurrentCityContainer;
