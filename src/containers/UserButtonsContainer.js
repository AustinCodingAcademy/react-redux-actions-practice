import {connect} from 'react-redux';
import UserButtons from '../components/UserButtons';
import {addUser} from '../actions';
import {removeUser} from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        add:function(user) {
            let action = addUser(user);
            dispatch(action);
        },
        remove:function(user) {
            let action = removeUser();
            dispatch(action);
        }
    }
}

const UserButtonsContainer = connect(null, mapDispatchToProps)(UserButtons);
export default UserButtonsContainer;