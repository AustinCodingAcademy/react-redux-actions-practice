import React from 'react';
import { connect } from 'react-redux';
import {setIsLoading} from "../actions";
import LoadingModal from "../components/Modal";

//map a prop called text to the state specialText
function mapStateToProps(state){
 return{
   isLoading:state.isLoading
 }
}

function mapDispatchToProps(dispatch){
return {
  setIsLoading:function(isLoading){
    var action = setIsLoading(isLoading);
    dispatch(action);
  }
}
}

const ModalContainer= connect(
 mapStateToProps,mapDispatchToProps)(LoadingModal);
export default ModalContainer;
