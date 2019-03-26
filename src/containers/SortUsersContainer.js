import { connect } from 'react-redux';
import SortUsers from "../components/SortUsers";
import { setCurrentUserSort } from "../actions";

const mapDispatchToProps = {
    set: setCurrentUserSort
}

export default connect(null, mapDispatchToProps)(SortUsers)