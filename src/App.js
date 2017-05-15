import React from "react";
import CounterButtonContainer from "./components/CounterButtonContainer";
import SpecialTextBoxContainer from "./components/SpecialTextBoxContainer";
import CounterContainer from "./components/CounterContainer";
import SpecialTextContainer from "./components/SpecialTextContainer";
import UserButtonsContainer from "./components/UserButtonsContainer";
import ThermostatContainer from "./components/ThermostatContainer";
import UsersContainer from "./components/UsersContainer";
import ChangeTemperatureContainer from "./components/ChangeTemperatureContainer";
import VideoPlayerContainer from "./components/VideoPlayerContainer";
import VideoTextBoxContainer from "./components/VideoTextBoxContainer";
import CurrentCityContainer from "./components/CurrentCityContainer";
import CityDropDownContainer from "./components/CityDropDownContainer";
import SearchTextBox from "./components/SearchTextBox";
import SortUsers from "./components/SortUsers";
import ScaleVideoContainer from "./components/ScaleVideoContainer";
import ModalContainer from "./components/ModalContainer";
import ShowModalContainer from "./components/ShowModalContainer";

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
        <SearchTextBox />
        <br />
        <VideoTextBoxContainer />
        <br />
        <SortUsers />
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
