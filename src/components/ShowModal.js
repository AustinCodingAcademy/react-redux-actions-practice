import React from 'react';
import { connect } from 'react-redux'
import { setIsLoading } from '../actions'

function ShowModal(props) {
  return (
      <div>
        <button onClick={
          ()=>{
            if(props.setIsLoading){
              props.setIsLoading(true);
            }
          }
        }>Show Modal</button>

      </div>
  );
}

const mdp = dispatch=>{
  return{
    setIsLoading:function(load){
      dispatch(setIsLoading(load))
    }
  }
}

export default connect(null,mdp) (ShowModal);