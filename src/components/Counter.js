import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  return (
      <div>
        Counter: {props.count}
      </div>
  );
}

function mapStateToProps(state){
  return{
    count: state.currentCount
  }
}

const CounterContainer = connect(mapStateToProps)(Counter) 
export default CounterContainer;