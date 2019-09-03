import {connect} from 'react-redux';
import {isLoading} from "../actions";
import ShowModal from '../components/ShowModal';


const mapDispatchToProps = {
   isLoading: isLoading
  }


export default connect(null,mapDispatchToProps)(ShowModal);