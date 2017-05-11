
import { connect } from "react-redux";
import Counter from "../components/Counter"

// ALWAYS name the below function mapStateToProps and return an object:  return{}
function mapStateToProps(state){
  return{
    // the below key needs to be the same name as the props you require above,
    // and the value needs to be the state.js files object(s) being
    // called within the file
    count:state.currentCount

  }
}


// calling connect returns a function which is why you can call functions
// immediately afterward.  Always in that order  OR...for example,
// this is how it's called:

// const connectedThingFunction = connect(mapStateToProps, mapDispatchToProps);
// const ListOfUsersContainer = connectedThingFunction(ListOfUsers);
const CounterContainer = connect(mapStateToProps)(Counter);
export default CounterContainer
