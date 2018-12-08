import {connect} from 'react-redux';
import {setCurrentUsersSort} from '../actions';
import SortUsers from '../components/SortUsers';

function mapDispatchToProps(dispatch){
    return {
        set: function(sort){
            var action = setCurrentUsersSort(sort);
            dispatch(action);
        }
    }
}
export default connect(null, mapDispatchToProps)(SortUsers);