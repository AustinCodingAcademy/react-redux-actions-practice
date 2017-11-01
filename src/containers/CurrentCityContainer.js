import { connect } from 'react-redux';
import {setCurrentUser} from "../actions";
import CurrentCity from "../components/CurrentCity";


function mapStateToProps(state){
  return {
    text: state.currentCity
  }
}

export default connect(mapStateToProps)(CurrentCity);
