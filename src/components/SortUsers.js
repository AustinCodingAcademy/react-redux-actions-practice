import React from 'react';
import { connect } from 'react-redux'
import { currentUserSort } from '../actions'

function SortUsers(props) {
  return (
      <div>
        Sort Users On: 
        <select onChange={
          (e)=>{
            if(props.set){
              props.set(e.target.value);
            }
          }
        }>
          <option value="first_name">First Name</option>
          <option value="last_name">Last Name</option>
        </select>
      </div>
  );
}

const mdp = (dispatch)=>{
  return{
    set:function(user){
      dispatch(currentUserSort(user))
    }
  }
}

export default connect(null,mdp)(SortUsers)

// export default SortUsers;