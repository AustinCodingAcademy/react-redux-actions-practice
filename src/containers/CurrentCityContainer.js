import { connect } from 'react-redux';
// import {setCurrentCity} from "../actions";
import CurrentCity from "../components/CurrentCity";


function mapStateToProps(state){
  return {
    text: state.currentCity
  }  
}

export default connect(mapStateToProps)(CurrentCity);