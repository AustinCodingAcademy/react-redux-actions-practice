import React from 'react';
import { connect } from 'react-redux';

function SpecialText(props) {
  return (
      <div>
        Special Text: {props.text}
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    text: state.specialText
}
}
// const mapStateToProps = state => ({ orders : state.orders })
  

  
export default connect(mapStateToProps)(SpecialText);

// export default SpecialText;