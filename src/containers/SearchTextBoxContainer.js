import SearchTextBox from "../components/SearchTextBox";
import {connect} from "react-redux";
import {setSearchText} from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        set: function(txt) {
            dispatch(setSearchText(txt));
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchTextBox);