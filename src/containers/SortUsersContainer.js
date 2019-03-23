import { connect } from 'react-redux';
import {currentUserSort} from "../actions";
import SortUsers from "../components/SortUsers";


const mapDispatchToProps = {
    set:currentUserSort
}


export default connect(null, mapDispatchToProps)(SortUsers);


