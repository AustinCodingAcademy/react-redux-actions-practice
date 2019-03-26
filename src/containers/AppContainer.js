import App from "../App.js"
import { connect } from 'react-redux';
import {addUser} from "../actions"


const mapDispatchToProps = {
  loadData:addUser,
}

function mapStateToProps(state){
  return {
    url:"https://jsonplaceholder.typicode.com/users"
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);

