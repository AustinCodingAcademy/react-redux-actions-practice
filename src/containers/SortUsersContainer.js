import SortUsers from "../components/SortUsers";
import {connect} from 'react-redux';
import {setCurrentUserSort} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    //this is the action in index.js.
    set: function(user) {
      let action = setCurrentUserSort(user);
       dispatch(action);
    }
  }
}

// using dispatch changes the data
const SortUsersContainer = connect(null, mapDispatchToProps)(SortUsers);
export default SortUsersContainer
