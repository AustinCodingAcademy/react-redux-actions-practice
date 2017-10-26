import { connect } from 'react-redux';
// import {setCurrentUser} from '.../actions';
import Users from '.../components/Users';

/*
//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    text: state.specialText
  }
}
*/

//map a prop called text to the state specialText
function mapStateToProps(state) {
  return {
    users: state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort
  }
}

export default connect(mapStateToProps)(Users);
