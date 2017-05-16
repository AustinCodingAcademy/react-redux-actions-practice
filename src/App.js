import React from 'react';
import CounterButton from "../containers/CounterButtonContainer.js";
import SpecialTextBox from "../containers/SpecialTextBox.js";
import Counter from "../containers/Counter.js";
import SpecialText from "../containers/SpecialText.js";
import UserButtons from "../containers/UserButtons.js";
import Thermostat from "../containers/Thermostat.js";
import Users from "../containers/Users.js";
import ChangeTemperature from "../containers/ChangeTemperature.js";
import VideoPlayer from "../containers/VideoPlayer.js";
import VideoTextBox from "../containers/VideoTextBox.js";
import CurrentCity from "../containers/CurrentCity.js";
import CityDropDown from "../containers/CityDropDown.js";
import SearchTextBox from "./containers/SearchTextBox.js";
import SortUsers from "../containers/SortUsers.js";
import ScaleVideo from "../containers/ScaleVideo.js";
import Modal from "../containers/Modal.js";
import ShowModal from "../containers/ShowModal.js";

function App() {
  return (
      <div className="App">
        <div className="containers">
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
