import {connect} from 'react-redux';
import SearchTextBox from '../components/SearchTextBox';
import {setSearchText} from '../actions/index';

const mapDispatchToProps = {
    set: setSearchText
}

export default connect(null, mapDispatchToProps)(SearchTextBox);