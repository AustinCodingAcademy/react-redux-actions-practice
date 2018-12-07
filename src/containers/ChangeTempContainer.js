import { connect } from "react-redux"
import { changeTemp } from '../actions'
import ChangeTemperature from '../components/ChangeTemperature'

const mapDispatchToProps = (dispatch)=>{
  return{
    set:function(value){
      dispatch(changeTemp(value))
    }
  }
};

export default connect(null, mapDispatchToProps)(ChangeTemperature);
