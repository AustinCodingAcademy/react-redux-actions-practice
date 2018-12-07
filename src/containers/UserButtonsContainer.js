import {connect} from 'react-redux';
import {addUser, removeUser} from '../actions';
import UserButtons from "../components/UserButtons";

function mapDispatchToProps(dispatch){
    return {
        add: function(user){
            var action = addUser(user);
            dispatch(action);
        },
        remove: function(){
            var action = removeUser();
            dispatch(action);
        }
    }
}
export default connect(null, mapDispatchToProps)(UserButtons)