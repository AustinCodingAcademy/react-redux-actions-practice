import {connect} from 'react-redux';
import UserButtons from '../components/UserButtons';
import {addUser} from '../actions';
import {removeUser} from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        addUser:function(user) {
            let action = addUser(user);
            dispatch(action);
        },
        addUser:function(user) {
            let action = addUser(user);
            dispatch(action);
        }
    }
}

const UserButtonsContainer = connect(mapDispatchToProps, UserButtons);
export default UserButtonsContainer;