import React from 'react';

function CityDropDown(props) {
  return (
      <div>
        CurrentCity: 
        <select onChange={
          (e)=>{
            if(props.set){
              props.set(e.target.value);
              // console.log(e.target.value)
              fetch('http://localhost:3003/city', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(e.target.value)
              })
              .then(res => res.json())
              .catch(console.log);
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