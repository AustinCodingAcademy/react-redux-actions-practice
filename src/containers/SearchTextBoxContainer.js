import {connect} from 'react-redux';
import SearchTextBox from "../components/SearchTextBox";

function mapDispatchToProps(dispatch){
  return{
    set:dispatch.setSearchText
  }
}

const SearchTextBoxContainer = connect(null, mapDispatchToProps)(SearchTextBox);
export default SearchTextBoxContainer
