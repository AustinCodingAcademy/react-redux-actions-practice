import React from "react";
import CounterButtonContainer from "./components/CounterButtonContainer";
import SpecialTextBoxContainer from "./components/SpecialTextBoxContainer";
import CounterContainer from "./components/CounterContainer";
import SpecialTextContainer from "./components/SpecialTextContainer";
import UserButtonsContainer from "./components/UserButtonsContainer";
import Thermostat from "./components/Thermostat";
import UsersContainer from "./components/UsersContainer";
import ChangeTemperature from "./components/ChangeTemperature";
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
        <UserButtonsContainer />
        <br />
        <CityDropDownContainer />
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
        <CurrentCityContainer />
        <br />
        <Thermostat />
        <br />
        <VideoPlayer />
        <br />


      </div>
      <div className="container">
        <UsersContainer />
      </div>
      <Modal />
    </div>
  );
}
export default App;
