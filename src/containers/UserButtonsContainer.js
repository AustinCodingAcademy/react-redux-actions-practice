import { connect } from 'react-redux';
import UserButtons from "../components/UserButtons";
import { add, removeUser } from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        add: function (user) {
            let action = add(user);
            dispatch(action)
        },
        remove: function () {
            let action = removeUser();
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(UserButtons)