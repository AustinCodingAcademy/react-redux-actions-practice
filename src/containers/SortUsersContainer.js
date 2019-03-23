import { connect } from 'react-redux';
import {currentUserSorter} from "../actions";
import SortUsers from "../components/SortUsers";


const mapDispatchToProps = {
    set:currentUserSorter
}


export default connect(null, mapDispatchToProps)(SortUsers);


