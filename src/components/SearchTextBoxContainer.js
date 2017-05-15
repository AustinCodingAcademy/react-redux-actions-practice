import {connect} from "react-redux";
import {setSearchText} from "../actions";
import SearchTextBox from "./SearchTextBox";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    set: (text) => {
      const action = setSearchText(text);
      dispatch(action);
    }
  };
};

const SearchTextBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTextBox);

export default SearchTextBoxContainer;
