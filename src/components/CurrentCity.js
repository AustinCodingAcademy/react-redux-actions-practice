import React from 'react';

function CurrentCity(props) {
  return (
      <div>
        CurrentCity: {props.text || "Select a City"}
      </div>
  );
}
export default CurrentCity;