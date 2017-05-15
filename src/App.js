import React from "react";
import CounterButtonContainer from "./components/CounterButtonContainer";
import SpecialTextBoxContainer from "./components/SpecialTextBoxContainer";
import CounterContainer from "./components/CounterContainer";
import SpecialTextContainer from "./components/SpecialTextContainer";
import UserButtons from "./components/UserButtons";
import ThermostatContainer from "./components/ThermostatContainer";
import Users from "./components/Users";
import ChangeTemperatureContainer from "./components/ChangeTemperatureContainer";
import VideoPlayer from "./components/VideoPlayer";
import VideoTextBox from "./components/VideoTextBox";
import CurrentCityContainer from "./components/CurrentCityContainer";
import CityDropDownContainer from "./components/CityDropDownContainer";
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
        <UserButtons />
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
        <ShowModal />
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
        <Users />
      </div>
      <Modal />
    </div>
  );
}
export default App;

