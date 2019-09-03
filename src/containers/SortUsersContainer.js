import {connect} from 'react-redux';
import {setCurrentUserSort} from "../actions";
import SortUsers from '../components/SortUsers';


const mapDispatchToProps = {
   set: setCurrentUserSort
  }


export default connect(null,mapDispatchToProps)(SortUsers);