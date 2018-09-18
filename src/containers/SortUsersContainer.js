import { connect } from 'react-redux';
import {setCurrentUserSort} from "../actions";
import SortUsers from "../components/SortUsers";

function mapDispatchToProps(dispatch){
  return {
   set:function(user){
     let action = setCurrentUserSort(user);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(SortUsers);
