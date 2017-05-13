import { connect } from "react-redux";
import SearchTextBox from "../components/SearchTextBox";
import setSearchText from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        set: (val) => dispatch(setSearchText(val))
    }
}

const SearchTextBoxContainer = connect(null, mapDispatchToProps)(SearchTextBox);
export default SearchTextBoxContainer;