import React from 'react';

function CityDropDown(props) {
  return (
      <div>
        Current Planet: 
        <select onChange={
          (e)=>{
            if(props.set){
              props.set(e.target.value);
            }
          }
        }>
          <option value="Earth">Earth</option>
          <option value="Mars">Mars</option>
          <option value="Saturn">Saturn</option>
          <option value="Uranus">Uranus</option>
          <option value="Jupiter">Jupiter</option>
          <option value="Neptune">Neptune</option>
          <option value="Pluto">Pluto</option>
        </select>
      </div>
  );
}

export default CityDropDown


