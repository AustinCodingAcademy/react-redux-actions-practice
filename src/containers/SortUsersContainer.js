import {connect} from 'react-redux';
import SortUsers from "../components/SortUsers";

function mapDispatchToProps(dispatch){
  return{
    set:dispatch.setCurrentUserSort
  }
}

const SortUsersContainer = connect(null, mapDispatchToProps)(SortUsers);
export default SortUsersContainer
