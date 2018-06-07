import React from 'react';
import { connect } from 'react-redux'
import { currentCity } from '../actions'

function CityDropDown(props) {
  return (
      <div>
        CurrentCity: 
        <select onChange={
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

const mdp = dispatch =>{
  return{
    set:function(city){
      dispatch(currentCity(city))}
  }
}

export default connect(null, mdp)(CityDropDown)


