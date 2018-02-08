import { connect } from 'react-redux';
import {CurrentUserSort} from "../actions";
import SortUsers from "../components/SortUsers";


function mapDispatchToProps(dispatch){
  return {
   set:function(sort){
     let action = CurrentUserSort(sort);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(SortUsers);
