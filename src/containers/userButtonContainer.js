import {connect} from 'react-redux';
import UserButton from '../components/UserButtons';
import {addUser} from '../actions/index';
import {removeUser} from '../actions/index';

const mapDispatchToProps = {
    add: addUser,
    remove: removeUser
}
export default connect(null, mapDispatchToProps)(UserButton);