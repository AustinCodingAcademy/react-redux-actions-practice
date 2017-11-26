import { connect } from "react-redux";
import { setCurrentUserSort } from "../actions";
import Users from "../components/Users";

function mapDispatchToProps(dispatch) {
  return {
    set:function(user){
      let action = setCurrentUserSort(user);
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(Users);
