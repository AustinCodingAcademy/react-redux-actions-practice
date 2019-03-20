import React,{Component} from "react";
import { connect } from 'react-redux';
import Users from "../components/Users.js";
import {addUser} from "../actions";

class UsersContainer extends Component {
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users=> users.forEach(user=>this.props.addUser(user)));
    }
  render(){
    return <Users {...this.props} />
  }
}
function mapStateToProps(state){
  return {
    users: state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort
  }
}

const mapDispatchToProps = {
  addUser:addUser
 }

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);