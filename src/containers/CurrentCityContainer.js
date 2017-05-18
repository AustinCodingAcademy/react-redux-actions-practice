import { connect } from "react-redux";
import CurrentCity from "../components/CurrentCity"



function mapStateToProps(state){
  return{
    text:state.CurrentCity
  }
}

const CurrentCityContainer = connect(mapStateToProps)(CurrentCity);
export default CurrentCityContainer
