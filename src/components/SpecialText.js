import React from 'react';

function SpecialText(props) {
  return (
      <div>
        Special Text: {props.text || "What would you like to write?"}
      </div>
  );
}
export default SpecialText;