import { connect } from 'react-redux';
import { setTemp } from "../actions";
import ChangeTemperature from "../components/ChangeTemperature";


const mapDispatchToProps = {
   set: setTemp
  }


export default connect(null,mapDispatchToProps)(ChangeTemperature);