import {connect} from 'react-redux';
import SearchTextBox from "../components/SearchTextBox";

function mapDispatchToProps(state){
  return{
    set:state.setSearchText
  }
}

const SearchTextBoxContainer = connect(mapDispatchToProps)(SearchTextBox);
export default SearchTextBoxContainer
