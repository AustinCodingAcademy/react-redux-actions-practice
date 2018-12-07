import { connect } from 'react-redux'
import Users from '../components/Users'

const mapStatetoProps = (state) => {
    return {
  users:state.users,
  firstNameFilter: state.searchText,
  sortOn: state.currentUserSort
}
}

const UsersContainer = connect(mapStatetoProps)(Users)

export default UsersContainer;