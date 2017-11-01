import React from 'react';
import CounterButton from "./components/CounterButton";
import SpecialTextBox from "./components/SpecialTextBox";
import Counter from "./components/Counter";
import SpecialText from "./components/SpecialText";
import UserButtons from "./components/UserButtons";
import Thermostat from "./components/Thermostat";
import Users from "./components/Users";
import ChangeTemperature from "./components/ChangeTemperature";
import VideoPlayer from "./components/VideoPlayer";
import VideoTextBox from "./components/VideoTextBox";
import CurrentCity from "./components/CurrentCity";
import CityDropDown from "./components/CityDropDown";
import SearchTextBox from "./components/SearchTextBox";
import SortUsers from "./components/SortUsers";
import ScaleVideo from "./components/ScaleVideo";
import Modal from "./components/Modal";
import ShowModal from "./components/ShowModal";

function App() {
  return (
      <div className="App">
        <div className="container">
          <CounterButtonContainer />
          <br />
          <SpecialTextBoxContainer />
          <br />
          <UserButtonsContainer />
          <br />
          <CityDropDownContainer />
           <br />
          <ChangeTemperatureContainer />
          <br />
          <SearchTextBoxContainer />
          <br />
          <VideoTextBoxContainer />
          <br />
          <SortUsersContainer />
          <br />
          <ScaleVideoContainer />
          <br />
          <ShowModalContainer />
        </div>
        <div className="container">
          <CounterContainer />
          <br />
          <SpecialTextContainer />
          <br />
          <CurrentCityContainer />
          <br />
          <ThermostatContainer />
          <br />
          <VideoPlayerContainer />
          <br />
          
          
        </div>
        <div className="container">
          <UsersContainer />
        </div>
        <ModalContainer />
      </div>
  );
}
export default App;