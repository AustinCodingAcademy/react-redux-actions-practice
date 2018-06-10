import { connect } from 'react-redux';
import {setCurrentUserSort} from "../actions";
import SortUsers from "../components/SortUsers";


function mapDispatchToProps(dispatch){
  return {
   set:function(user){
     dispatch(setCurrentUserSort(user))
    // let action = SortUsers();
    // dispatch(setCurrentUserSort(action));
   }
  }
}

export default connect(null,mapDispatchToProps)(SortUsers);
