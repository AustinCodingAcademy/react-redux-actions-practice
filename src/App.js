import React from 'react';
import CounterButton from "./containers/CounterButton";
import SpecialTextBox from "./containers/SpecialTextBox";
import Counter from "./containers/Counter";
import SpecialText from "./containers/SpecialText";
import UserButtons from "./containers/UserButtons";
import Thermostat from "./containers/Thermostat";
import Users from "./containers/Users";
import ChangeTemperature from "./containers/ChangeTemperature";
import VideoPlayer from "./containers/VideoPlayer";
import VideoTextBox from "./containers/VideoTextBox";
import CurrentCity from "./containers/CurrentCity";
import CityDropDown from "./containers/CityDropDown";
import SearchTextBox from "./containers/SearchTextBox";
import SortUsers from "./containers/SortUsers";
import ScaleVideo from "./containers/ScaleVideo";
import Modal from "./containers/Modal";
import ShowModal from "./containers/ShowModal";
// is this working
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
