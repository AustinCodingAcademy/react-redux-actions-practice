// Import connect
// import actions
// import the appropriate component
import { connect } from 'react-redux';
import { setSearchText } from "../actions";
import SearchTextBox from "../components/SearchTextBox";

// Create mapDispatchToProps
function mapDispatchToProps(dispatch){
  return {
   set:function(text){
     let action = setSearchText(text);
     dispatch(action);
   }
  }
}

//Connect component to mapDispatchToProps.  export Container.
export default connect(null,mapDispatchToProps)(SearchTextBox);
