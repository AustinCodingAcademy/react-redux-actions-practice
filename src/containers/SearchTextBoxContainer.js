import { connect } from "react-redux";
import {setSearchText} from "../actions"
import SearchTextBox from "../components/SearchTextBox"


function mapDispatchToProps(dispatch){
  return{
    set: function(text){
      let action = setSearchText(text);
      dispatch(action);
    }
  }
}

const SearchTextBoxContainer = connect(mapDispatchToProps)(SearchTextBox);
export default SearchTextBoxContainer
