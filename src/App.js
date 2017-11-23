import React from "react";
import CounterButtonContainer from "./containers/CounterButtonContainer";
import CounterContainer from "./containers/CounterContainer";
import SpecialTextBox from "./components/SpecialTextBox";
import SpecialText from "./components/SpecialText";
import UserButtons from "./components/UserButtons";
import ThermostatContainer from "./containers/ThermostatContainer";
import Users from "./components/Users";
import ChangeTemperatureContainer from "./containers/ChangeTemperatureContainer";
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
          <SpecialTextBox />
          <br />
          <UserButtons />
          <br />
          <CityDropDown />
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
          <SpecialText />
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