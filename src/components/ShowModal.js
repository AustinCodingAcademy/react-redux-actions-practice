import React from 'react';
import {ShowModalContainer} from '../containers/ShowModalContainer';

function ShowModal(props) {
  return (
      <div>
        <button onClick={
          ()=>{
            if(props.setIsLoading){
              props.setIsLoading(true);
            }
          }
        }>Show Modal</button>

      </div>
  );
}
export default ShowModal;