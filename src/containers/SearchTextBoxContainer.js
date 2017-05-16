import { connect } from 'react-redux';
import SearchTextBox from '../components/SearchTextBox';
import { setSearchText } from '../actions';

function mapStateToProps(state) {
  return {
    users: state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort
  };
}

function mapDispatchToProps(dispatch) {
  return {
    set: (text) => {
      const action = setSearchText(text);
      dispatch(action);
    }
  }
}

const SearchTextBoxContainer = connect(mapStateToProps, mapDispatchToProps)(SearchTextBox);

export default SearchTextBoxContainer;
