import { connect } from 'react-redux';
import {setTemp} from "../actions";
import ChangeTemperature from "../components/ChangeTemperature.js";


const mapDispatchToProps = {
   set:setTemp
  }


export default connect(null,mapDispatchToProps)(ChangeTemperature)