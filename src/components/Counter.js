import React from 'react';
import { connect } from "react-redux";

function Counter(props) {
  return (
      <div>
        Counter: {props.count}
      </div>
  );
}


const mapStateToProps = (state) => {
  return {
    count: state.currentCount,
  };
};

export default connect(mapStateToProps, null)(Counter);
