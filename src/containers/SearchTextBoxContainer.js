import SearchTextBox from "../components/SearchTextBox";
import {connect} from 'react-redux';
import {setSearchText} from "../actions";


function mapDispatchToProps(dispatch) {
  return {
    set: function(text) {
      // the action:
      let action = setSearchText(text);
      dispatch (action);
    }
  }
}


const SearchTextBoxContainer = connect(null, mapDispatchToProps)(SearchTextBox);
export default SearchTextBoxContainer
