import {connect} from "react-redux";
import {setCurrentUserSort} from "./actions";

function mapDispatchToProps(dispatch){
  return {
    set: function(){
      var action = setCurrentUserSort();
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(SortUsers);