import React from "react";

function ChangeTemperature(props){
    return(
      <div>
        <br/>
        <label>Change Temp -  Enter a value from 1-100<br/>
          <input onChange={(e)=>{
            if(props.set)
              props.set(parseInt(e.target.value, 10));
          }} type="number" min="0" max="100" />
        </label>
      </div>
    )
}

export default ChangeTemperature;