import { connect } from 'react-redux';
import currentCity from "../components/currentCity";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    text: state.currentCity
  }
}

export default connect(mapStateToProps)(currentCity);