import { connect } from 'react-redux';
import { setTemp } from "../../actions"
import ChangeTemperature from "../../components/ChangeTemperature";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    set: setTemp
  }
}

export default connect(mapStateToProps)(ChangeTemperature);
