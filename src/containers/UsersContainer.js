import {connect} from "react-redux";
import Users from "../components/Users";

function mapStateToProps(state){
  return{
    count: state.users
  }
}

//this is the shorter way to export:
//export default connect(mapStateToProps)(Users)

let otherFunction = connect(mapStateToProps);
let UsersContainer = otherFunction(Users);
export default UsersContainer;
