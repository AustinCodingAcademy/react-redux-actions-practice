import React from 'react';
import { connect } from 'react-redux';
import {setSearchText} from "../actions";
import SearchTextBox from "../components/SearchTextBox";


function mapDispatchToProps(dispatch){
return {
  set:function(text){
    var action = setSearchText(text);
    dispatch(action);
  }
}
}

const SearchTextBoxContainer = connect(null,mapDispatchToProps)(SearchTextBox);
export default SearchTextBoxContainer;
