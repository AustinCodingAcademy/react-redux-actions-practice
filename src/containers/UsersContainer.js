import User from '../components/Users';
import {connect} from 'react-redux';
import state from '../state';

const mapStateToProps = (state) => {
    return {
        users: state.users,
        firstNameFilter: state.searchText,
        sortOn: state.currentUserSort
    }
}

export default connect(mapStateToProps)(User)
