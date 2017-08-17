import React from 'react';

function CounterButton(props) {
  return (
      <div>
        <button onClick={props.increase}>
          Increase Counter By One
        </button>
        <button onClick={props.decrease}>
          Decrease Counter By One
        </button>
      </div>
  );
}
export default CounterButton;
