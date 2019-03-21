import { connect } from 'react-redux';
import {increaseCounter} from "../actions";
import {decreaseCounter} from "../actions";
import Counter from "../components/Counter";

const mapDispatchToProps = {
   set:setSpecialText
  }

export default connect(null,mapDispatchToProps)(Counter);