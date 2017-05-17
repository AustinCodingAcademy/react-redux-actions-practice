import {connect} from 'react-redux';
import SortUsers from '../components/SortUsers';
import {setCurrentUserSort} from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        set:function(sort) {
            let action = setCurrentUserSort(sort);
            dispatch(action);
        }
    }
}

const SortUsersContainer = connect(null, mapDispatchToProps)(SortUsers);
export default SortUsersContainer;