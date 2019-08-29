import Users from '../components/Users';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        users: state.users,
        firstNameFilter: state.searchText,
        sortOn: state.currentUserSort
    }
}

export default connect(mapStateToProps)(Users)
