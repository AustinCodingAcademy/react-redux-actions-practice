import React from 'react';

function Counter(props) {
console.log("Went into Counter");
  return (

      <div>
        Counter: {props.count}
      </div>
  );
}
export default Counter;
