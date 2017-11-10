import { connect } from 'react-redux';
import Users from "../components/UserButtons";


function mapStateToProps(state){
    return {
        users: state.users,
        firstNameFIlter: state.searchText,
        sortOn: state.currentUserSort
    }
  }


var label = connect(mapStateToProps);
var UsersContainer = label(Users);
export default UsersContainer;

