import { connect } from 'react-redux';
import CurrentCity from "../components/CurrentCity";

function mapStateToProps(state){
    return {
      text: state.CurrentCity
    }
  }
  
  export default connect(mapStateToProps)(CurrentCity);