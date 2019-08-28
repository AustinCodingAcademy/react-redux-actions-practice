import React from 'react';
import CounterButton from "./containers/counterButtonContainer";
import SpecialTextBox from "./containers/SpecialTextBoxContainer";
import Counter from "./containers/counterContainer";
import SpecialText from "./containers/SpecialTextContainer";
import UserButtons from "./containers/userButtonContainer";
import Thermostat from "./containers/thermostatContainer";
import Users from "./containers/usersContainer";
import ChangeTemperature from "./containers/changeTempContainer";
import VideoPlayer from "./containers/videoPlayerContainer";
import VideoTextBox from "./containers/videoTextBoxContainer";
import CurrentCity from "./containers/currentCityContainer";
import CityDropDown from "./containers/cityDropDownContainer";
import SearchTextBox from "./containers/searchTextBoxContainer";
import SortUsers from "./containers/sortUserContainer";
import ScaleVideo from './containers/scaleVideoContainer';
import Modal from "./containers/modalContainer";
import ShowModal from "./containers/showModalContainer";

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