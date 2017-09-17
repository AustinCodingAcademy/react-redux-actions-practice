import { connect } from 'react-redux';
import Users from "../components/Users";
// mapState... doesn't need action imported

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    users: state.users,
    firstNameFilter: state.SearchText,
    sortOn: currentUserSort
  }
}

export default connect(mapStateToProps)(Users);
