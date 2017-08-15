import React from 'react';



// this function shows the state.currentCity
function CurrentCity(props) {
  console.log(props.text)
  return (
      <div>
        CurrentCity: {props.text}
      </div>
  );
}
export default CurrentCity;
