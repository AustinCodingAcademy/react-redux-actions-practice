import {connect} from 'react-redux';
import Counter from '../components/Counter' //imported when container built

function mapStateToProps(state) {return {
    count:state.currentCount
  }
  }
  //this export turns component into container which means counter isn't the componenet being exported
  //components should be standalone and be usable without redux so we use containers
  export default connect(mapStateToProps)(Counter);//component connecting to.