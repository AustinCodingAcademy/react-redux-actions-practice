import {connect} from 'react-redux';
import {setSearchText} from "../actions";
import SearchTextBox from "../components/SearchTextBox";



// map prop `set` to action `setSearchText`
const mapDispatchToProps = dispatch => {
  return {
    set: (txt) => {
      const action = setSearchText(txt);
      dispatch(action);
    }
  };
};

const SearchTextBoxContainer = connect(null, mapDispatchToProps)(SearchTextBox);
export default SearchTextBoxContainer
