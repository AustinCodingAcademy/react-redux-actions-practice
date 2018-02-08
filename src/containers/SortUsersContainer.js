import { connect } from 'react-redux';
import {setSpecialText} from "../actions";
import SortUsers from "../components/SortUsers";


function mapDispatchToProps(dispatch){
  return {
   set:function(sort){
     let action = setCurrentUserSort(sort);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(SortUsers);
