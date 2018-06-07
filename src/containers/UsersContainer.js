import { connect } from 'react-redux'
import Users from '../components/Users'

const msp = (state) => {return{
  users:state.users,
  firstNameFilter: state.searchText,
  sortOn: state.currentUserSort
}
}

const UsersContainer = connect(msp)(Users)

export default UsersContainer;