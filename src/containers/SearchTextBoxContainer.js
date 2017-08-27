import {setSearchText} from "../actions";
import {connect} from "react-redux";
import SearchTextBox from "../components/SearchTextBox";

function mapDispatchToProps(dispatch) {
  return{
    set: function(text){
      let action = setSearchText(text);
      dispatch(action);
    }
  }
}

//This is the shorter way to export.
//export default connect(null,mapDispatchToProps)(CounterButton)

let otherFunction = connect(null, mapDispatchToProps);
let SearchTextBoxContainer = otherFunction(SearchTextBox)
export default SearchTextBoxContainer;
