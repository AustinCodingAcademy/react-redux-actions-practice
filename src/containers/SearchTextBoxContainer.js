import { connect } from 'react-redux';
import { setSearchText } from "../actions";
import SearchTextBox from "../components/SearchTextBox";




function mapDispatchToProps(dispatch){
  return {
   set:function(txt){
     let action = setSearchText(txt);
     dispatch(action);
   }
  }
}
const SearchTextBoxContainer = connect(null,mapDispatchToProps)(SearchTextBox);
export default SearchTextBoxContainer;
