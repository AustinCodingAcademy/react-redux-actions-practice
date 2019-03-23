import { connect } from 'react-redux';
import {setCurrentCity} from "../actions";
import CurrentCity from "../components/CurrentCity";

//map a prop called text to the state currentCity
function mapStateToProps(state){
  console.log("The new City: " + state.currentCity);

  return {
    text: state.currentCity
  }
}

export default connect(mapStateToProps)(CurrentCity);
