import { connect } from "react-redux";
import UserButtons from "../components/UserButtons";
import addUser from "../actions";
import removeUser from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        add: (val) => dispatch(addUser(val)),
        remove: (val) => dispatch(removeUser(val))
    }
};


const UserButtonsContainer = connect(null, mapDispatchToProps)(UserButtons);
export default UserButtonsContainer;