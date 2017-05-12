import React from 'react';
import {SpecialTextContainer} from '../containers/SpecialTextContainer';

function SpecialText(props) {
  return (
      <div>
        Special Text: {props.text}
      </div>
  );
}
export default SpecialText;