import React from 'react';
import {CurrentCityContainer} from '../containers/CurrentCityContainer';

function CurrentCity(props) {
  return (
      <div>
        CurrentCity: {props.text}
      </div>
  );
}
export default CurrentCity;