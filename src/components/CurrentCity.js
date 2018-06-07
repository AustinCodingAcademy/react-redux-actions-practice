import React from 'react';
import { connect } from 'react-redux'

function CurrentCity(props) {
  return (
      <div>
        CurrentCity: {props.text}
      </div>
  );
}

const msp = (state)=>{return{text:state.currentCity}}

const CurrentCityContainer = connect(msp)(CurrentCity)

export default CurrentCityContainer