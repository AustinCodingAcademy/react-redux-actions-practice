import { connect } from 'react-redux';
import {setSearchText} from "../actions";
import SearchTextBox from "../components/SearchTextBox.js";


const mapDispatchToProps = {
   set:setSearchText
  }


export default connect(null,mapDispatchToProps)(SearchTextBox);