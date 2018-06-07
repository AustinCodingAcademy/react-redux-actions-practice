import React from "react";
import { connect } from "react-redux"
import { changeTemp } from '../actions'

function ChangeTemperature(props){
    return(
      <div>
        <br/>
        <label>Change Temp -  Enter a value from 1-100<br/>
          <input onChange={(e)=>{
            if(props.set)
              props.set(e.target.value);
          }} type="number" min="0" max="100" />
        </label>
      </div>
    )
}

const mdp = (dispatch)=>{
  return{
    set:function(value){
      dispatch(changeTemp(value))
    }
  }
}

export default connect(null,mdp)(ChangeTemperature);