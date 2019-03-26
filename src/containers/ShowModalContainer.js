import { connect } from 'react-redux';
import {setIsLoading} from "../actions";
import ShowModal from "../components/ShowModal";

const mapDispatchToProps = {
  setIsLoading:setIsLoading
}

export default connect(null,mapDispatchToProps)(ShowModal);
