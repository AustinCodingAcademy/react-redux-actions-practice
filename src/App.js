import React from 'react';
import CounterButtonContainer from "./containers/CounterButtonContainer";
import SpecialTextBoxContainer from "./containers/SpecialTextBoxContainer";
import CounterContainer from "./containers/CounterContainer";
import SpecialTextContainer from "./containers/SpecialTextContainer";
import UserButtons from "./components/UserButtons";
import ThermostatContainer from "./containers/ThermostatContainer";
import Users from "./components/Users";
import ChangeTemperatureContainer from "./containers/ChangeTemperatureContainer";
import VideoPlayer from "./components/VideoPlayer";
import VideoTextBox from "./components/VideoTextBox";
import CurrentCityContainer from "./containers/CurrentCityContainer";
import CityDropDownContainer from "./containers/CityDropDownContainer";
import SearchTextBoxContainer from "./containers/SearchTextBoxContainer";
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
          <SearchTextBoxContainer />
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