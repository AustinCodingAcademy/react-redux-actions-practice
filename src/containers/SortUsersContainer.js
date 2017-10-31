import {connect} from "react-redux";
import SortUsers from "../components/SortUsers";
import {setCurrentUserSort} from "../actions"

function mapDispatchToProps(dispatch){
  return {
    set:function(txt){
      let action = setCurrentUserSort(txt);
      dispatch(action);
    }
  }
}
export default connect(null,mapDispatchToProps)(SortUsers);
