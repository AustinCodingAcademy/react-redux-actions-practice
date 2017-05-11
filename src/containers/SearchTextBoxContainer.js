import { connect } from 'react-redux';
import SearchTextBox from '../components/SearchTextBox';
import {setSearchText} from '../actions';

function mapDispatchToProps(dispatch){
  return {
    // returns an object that we call an action
    set:function(text){
      let action = setSearchText(text);
      dispatch(action);
    }
  }
}

const SearchTextBoxContainer = connect(mapDispatchToProps)(SearchTextBoxContainer);

export default SearchTextBoxContainer