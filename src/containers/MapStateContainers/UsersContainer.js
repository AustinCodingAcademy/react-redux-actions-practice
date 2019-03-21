import { connect } from 'react-redux';
import users from "../components/Users";


//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    users: state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort
    }
}

export default connect(mapStateToProps)(users);
