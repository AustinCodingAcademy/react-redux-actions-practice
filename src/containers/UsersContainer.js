import React from 'react';
import { connect } from 'react-redux';
import Users from "../components/Users";

//map a prop called text to the state specialText
function mapStateToProps(state){
 return{
   users:state.users,
   firstNameFilter:state.searchText,
   sortOn:state.currentUserSort
 }
}

const UsersContainer= connect(
 mapStateToProps
)(Users);
export default UsersContainer;
