import { connect } from 'react-redux';
import {setCurrentUserSort} from "../actions";
import SortUsers from "../components/SortUsers";


function mapDispatchToProps(dispatch){
  return {
   set:function(e){
     let action = setCurrentUserSort(e);
     dispatch(action);
   }
  }
}

const SortUsersContainer = connect(null,mapDispatchToProps)(SortUsers);

export default SortUsersContainer