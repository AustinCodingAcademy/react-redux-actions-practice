import React from 'react';
import CounterButtonContainer from "./components/CounterButton";
import SpecialTextBoxContainer from "./components/SpecialTextBox";
import CounterContainer from "./components/Counter";
import SpecialTextContainer from "./components/SpecialText";
import UserButtonsContainer from "./components/UserButtons";
import ThermostatContainer from "./components/Thermostat";
import UsersContainer from "./components/Users";
import ChangeTemperatureContainer from "./components/ChangeTemperature";
import VideoPlayerContainer from "./components/VideoPlayer";
import VideoTextBoxContainer from "./components/VideoTextBox";
import CurrentCityContainer from "./components/CurrentCity";
import CityDropDownContainer from "./components/CityDropDown";
import SearchTextBoxContainer from "./components/SearchTextBox";
import SortUsersContainer from "./components/SortUsers";
import ScaleVideoContainer from "./components/ScaleVideo";
import ModalContainer from "./components/Modal";
import ShowModalContainer from "./components/ShowModal";

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