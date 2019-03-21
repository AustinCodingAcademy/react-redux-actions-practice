import React from 'react';

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

//store.dispatch({type:"dksdjslj"}) this is replaced by mapDispatchToProps

// This dispatch can be put into it's own container since it only pertains to Redux
// function mapDispatchToProps(dispatch){
//     set:setSpecialText    
// }

// export default connect(null,mapDispatchToProps)(SpecialTextBox);