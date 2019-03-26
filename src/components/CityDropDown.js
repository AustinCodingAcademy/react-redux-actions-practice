import React from 'react';



function CityDropDown(props) {
  props.set("Austin")
  return (
      <div>
        CurrentCity: 
        <select id={"CityView"} onChange={
          (e)=>{
            if(props.set){
              props.set(e.target.value);
            }
          }
        }>
          <option value="Austin">Austin</option>
          <option value="New York">New York</option>
          <option value="New Olreans">New Olreans</option>
          <option value="Las Vegas">Las Vegas</option>
          <option value="Seattle">Seattle</option>
          <option value="San Fransisco">San Fransisco</option>
          <option value="Washington D.C.">Washington D.C.</option>
        </select>
      </div>
  );
}
export default CityDropDown;