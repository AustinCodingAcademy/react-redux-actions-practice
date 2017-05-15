import React from "react";
import CounterButtonContainer from "./components/CounterButtonContainer";
import SpecialTextBoxContainer from "./components/SpecialTextBoxContainer";
import CounterContainer from "./components/CounterContainer";
import SpecialTextContainer from "./components/SpecialTextContainer";
import UserButtonsContainer from "./components/UserButtonsContainer";
import ThermostatContainer from "./components/ThermostatContainer";
import UsersContainer from "./components/UsersContainer";
import ChangeTemperatureContainer from "./components/ChangeTemperatureContainer";
import VideoPlayer from "./components/VideoPlayer";
import VideoTextBox from "./components/VideoTextBox";
import CurrentCityContainer from "./components/CurrentCityContainer";
import CityDropDownContainer from "./components/CityDropDownContainer";
import SearchTextBox from "./components/SearchTextBox";
import SortUsers from "./components/SortUsers";
import ScaleVideo from "./components/ScaleVideo";
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
        <VideoTextBox />
        <br />
        <SortUsers />
        <br />
        <ScaleVideo />
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
        <VideoPlayer />
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
