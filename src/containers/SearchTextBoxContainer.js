import { connect } from 'react-redux';
import {searchText} from "../actions";
import SearchTextBox from "../components/SearchTextBox";


const mapDispatchToProps = {
    set:searchText
}


export default connect(null, mapDispatchToProps)(SearchTextBox);


