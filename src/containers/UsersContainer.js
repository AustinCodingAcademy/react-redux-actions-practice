import {connect} from "react-redux";
import Users from "../components/Users"

function mapStateToProps(state) {
    return {
      users:state.users
    }
  }
  
  let UsersCountainer=connect(mapStateToProps)(Users);
  export default UsersCountainer;