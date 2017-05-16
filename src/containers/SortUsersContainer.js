import { connect } from "react-redux";
import SortUsers from "../components/SortUsers";
import {setCurrentUserSort} from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        set: (val) => dispatch(setCurrentUserSort(val))
    }
}

const SortUsersContainer = connect(null, mapDispatchToProps)(SortUsers);
export default SortUsersContainer;