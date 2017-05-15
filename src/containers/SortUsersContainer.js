import {connect} from 'react-redux';
import SortUsers from "../components/SortUsers";

function mapDispatchToProps(state){
  return{
    set:state.setCurrentUserSort
  }
}

const SortUsersContainer = connect(mapDispatchToProps)(SortUsers);
export default SortUsersContainer
