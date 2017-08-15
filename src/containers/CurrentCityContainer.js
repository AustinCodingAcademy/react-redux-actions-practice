import {connect} from "react-redux";
import CurrentCity from "../components/CurrentCity";

function mapStateToProps(state){
  console.log(state.currentCity);
  return{
    
    text: state.currentCity
  }
}

export default connect(mapStateToProps)(CurrentCity);