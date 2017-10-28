// Import connect
// import actions
// import the appropriate component
import { connect } from 'react-redux';
import { setTemp } from "../actions";
import ChangeTemperature from "../components/ChangeTemperature";

// Create mapDispatchToProps
function mapDispatchToProps(dispatch){
  return {
   set:function(temp){
     let action = setTemp(temp);
     dispatch(action);
   }
  }
}

//Connect component to mapDispatchToProps.  export Container.
export default connect(null,mapDispatchToProps)(ChangeTemperature);
