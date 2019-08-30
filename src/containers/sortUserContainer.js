import {connect} from 'react-redux';
import SortUsers from '../components/SortUsers';
import {setCurrentUserSort} from '../actions/index';

const mapDispatchToProps = {
    set: setCurrentUserSort
}

export default connect(null, mapDispatchToProps)(SortUsers); 