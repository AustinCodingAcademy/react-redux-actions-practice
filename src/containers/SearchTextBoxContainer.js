import { connect } from 'react-redux';
import {setSearchText} from "../actions";
import SearchTextBox from "../components/SearchTextBox";


function mapDispatchToProps(dispatch){
  return {
   set:function(e){
     let action = setSearchText(e);
     dispatch(action);
   }
  }
}

const SearchTextBoxContainer = connect(null,mapDispatchToProps)(SearchTextBox);

export default SearchTextBoxContainer