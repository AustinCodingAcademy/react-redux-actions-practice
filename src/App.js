import React from "react";
import ChangeTemperature from "./components/ChangeTemperature";
import CityDropDown from "./components/CityDropDown";
import CounterButtonContainer from "./components/CounterButtonContainer";
import CounterContainer from "./components/CounterContainer";
import CurrentCity from "./components/CurrentCity";
import Modal from "./components/Modal";
import ScaleVideo from "./components/ScaleVideo";
import SearchTextBox from "./components/SearchTextBox";
import ShowModal from "./components/ShowModal";
import SortUsers from "./components/SortUsers";
import SpecialTextContainer from "./components/SpecialTextContainer";
import SpecialTextBoxContainer from "./components/SpecialTextBoxContainer";
import ThermostatContainer from "./components/ThermostatContainer";
import UserButtons from "./components/UserButtons";
import Users from "./components/Users";
import VideoPlayer from "./components/VideoPlayer";
import VideoTextBox from "./components/VideoTextBox";

function App() {
  return (
    <div className="App">

      <div className="container">
        <CounterButtonContainer />
        <br />
        <SpecialTextBoxContainer />
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
        <CounterContainer />
        <br />
        <SpecialTextContainer />
        <br />
        <CurrentCity />
        <br />
        <ThermostatContainer />
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
