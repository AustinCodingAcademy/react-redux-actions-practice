import { connect } from 'react-redux';
import Users from "../components/Users";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    users: state.users,
    firstNameFilter: state.SearchText,
    sortOn: state.currentUserSort 
  }
}

export default connect(mapStateToProps)(Users);
