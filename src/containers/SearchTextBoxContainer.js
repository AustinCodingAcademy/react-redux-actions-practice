import { connect } from 'react-redux';
import SearchTextBox from "../components/SearchTextBox";
import { setSearchText } from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        set: function (txt) {
            let action = setSearchText(txt)
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchTextBox)