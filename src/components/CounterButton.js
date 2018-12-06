import React from 'react';
import {connect} from 'react-redux';
import {increaseCounter, decreaseCounter} from "../actions";

function CounterButton(props) {
  return (
      <div>
        <button onClick={
          ()=>{
            if(props.increase){
              props.increase();
            }
          }
        }>Increase Counter By One</button>
        <button onClick={
          ()=>{
            if(props.decrease){
              props.decrease();
            }
          }
        }>Decrease Counter By One</button>
      </div>
  );
}
//in return first value is name of prop setting up
//you can have more than one key on the object
function mapDispatchToProps(dispatch){
  return {
    increase:function(){ //no parameter for this element so no arg passed
      var action = increaseCounter(); //see above
      dispatch(action);
    },
    decrease:function(){ //no parameter for this element so no arg passed
      var action = decreaseCounter(); //see above
      dispatch(action);
    }
   } 
  }

  export default connect(null,mapDispatchToProps)(CounterButton); //Should be componenet name
  
  
