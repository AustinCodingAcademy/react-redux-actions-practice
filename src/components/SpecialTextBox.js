import React from 'react';
// import {connect} from "react-redux";
// import {setSpecialText} from "../actions";

export default function SpecialTextBox(props) {
  return (
      <div>
        Enter Special Text:
        <input onChange={(e)=>{
            if(props.set){
              props.set(e.target.value);
            }
        }} />
      </div>
  );
}

// let mapDispatchToProps={
//   set:setSpecialText
// }

// export default connect(null,mapDispatchToProps)(SpecialTextBox);