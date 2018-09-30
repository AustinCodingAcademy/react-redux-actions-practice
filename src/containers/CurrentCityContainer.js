
import { connect } from 'react-redux';
import CurrentCity from "../components/CurrentCity";

function mapDispatchToProps(state){
    return {
        text: state.CurrentyCity
     }
    

 export default connect(null,mapDispatchToProps)(CurrentCity);
  