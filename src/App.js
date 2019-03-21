import React from 'react';
import CounterButton from "./containers/DispatchContainers/CounterButtonContainer";
import SpecialTextBox from "./containers/DispatchContainers/SpecialTextBoxContainer";
import Counter from "./containers/MapStateContainers/CounterContainer";
import SpecialText from "./containers/MapStateContainers/SpecialTextContainer";
import UserButtons from "./containers/DispatchContainers/UserButtonsContainer";
import Thermostat from "./containers/MapStateContainers/ThermostatContainer";
import Users from "./containers/MapStateContainers/UsersContainer";
import ChangeTemperature from "./containers/DispatchContainers/ChangeTemperatureContainer";
import VideoPlayer from "./containers/MapContainers/VideoPlayerContainer";
import VideoTextBox from "./containers/DispatchContainers/VideoTextBoxContainer";
import CurrentCity from "./containers/MapStateContainers/CurrentCityContainer";
import CityDropDown from "./containers/DispatchContainers/CityDropDownContainer";
import SearchTextBox from "./containers/DispatchContainers/SearchTextBoxContainer";
import SortUsers from "./containers/DispatchContainers/SortUsersContainer";
import ScaleVideo from "./containers/DispatchContainers/ScaleVideoContainer";
import Modal from "./containers/DispatchContainers/ModalContainer";
// import Modal from "./containers/MapStateContainers/ModalContainer"
import ShowModal from "./containers/DispatchContainers/ShowModalContainer";

function App() {
  return (
      <div className="App">
        <div className="container">
          <CounterButton />
          <br />
          <SpecialTextBox />
          <br />
          <UserButtons />
          <br />
          <CityDropDown />
           <br />
          <ChangeTemperature />
          <br />
          <SearchTextBox />
          <br />
          <VideoTextBox />
          <br />
          <SortUsers />
          <br />
          <ScaleVideo />
          <br />
          <ShowModal />
        </div>
        <div className="container">
          <Counter />
          <br />
          <SpecialText />
          <br />
          <CurrentCity />
          <br />
          <Thermostat />
          <br />
          <VideoPlayer />
          <br />
          
          
        </div>
        <div className="container">
          <Users />
        </div>
        <Modal />
      </div>
  );
}
export default App;