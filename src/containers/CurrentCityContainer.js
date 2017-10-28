//Import connect from react-redux
//import appropriate component: currentCity
import { connect } from 'react-redux';
import CurrentCity from "../components/CurrentCity";

//map a prop called text to the state
function mapStateToProps(state){
  return {
    text: state.currentCity
  }
}

// Call connect function
export default connect(mapStateToProps)(CurrentCity);
