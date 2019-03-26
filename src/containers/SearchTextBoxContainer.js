import { connect } from 'react-redux';
import {setFirstNameFilter} from "../actions";
import SearchTextBox from "../components/SearchTextBox";


const mapDispatchToProps = {
   set:setFirstNameFilter
  }


export default connect(null,mapDispatchToProps)(SearchTextBox);
