import { connect } from 'react-redux';
import SearchTextBox from "../components/SearchTextBox";
import { setSearchText  } from "../actions";



function mapDispatchToProps(dispatch){
    return {
     set:function(text){
       let action = setSearchText(text);
       dispatch(action);
     }
    }
  }


var label = connect(null, mapDispatchToProps);
var SearchTextBoxContainer = label(SearchTextBox);
export default SearchTextBoxContainer;

