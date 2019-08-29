import App from '../App';
import {connect} from 'react-redux';
import {loadUsers} from '../actions';

const mapDispatchToProps = {
    set: loadUsers
}

export default connect(null, mapDispatchToProps)(App)

