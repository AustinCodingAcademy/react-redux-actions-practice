import { connect } from 'react-redux';
import {changeTemperature} from "../actions";
import ChangeTemperature from "../components/ChangeTemperature";


const mapDispatchToProps = {
   set:changeTemperature
  }


export default connect(null,mapDispatchToProps)(ChangeTemperature);
