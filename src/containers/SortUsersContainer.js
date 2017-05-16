import SortUsers from "../components/SortUsers";
import {connect} from "react-redux";
import {setCurrentUserSort} from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        set: function(user) {
            dispatch(setCurrentUserSort(user));
        }
    }
}

export default connect(null, mapDispatchToProps)(SortUsers);