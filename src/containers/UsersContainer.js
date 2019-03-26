import { connect } from 'react-redux';
import Users from "../components/Users";

//map a prop called text to the state specialText
function mapStateToProps(state){

    console.log("First Name: " + state.searchText);
  return {
    users: state.users,
    firstNameFilter: state.searchText
  }
}

export default connect(mapStateToProps)(Users);
