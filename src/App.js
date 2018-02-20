import React from 'react';
import SpecialTextContainer from "./containers/SpecialTextContainer";
import SpecialTextBoxContainer from "./containers/SpecialTextBoxContainer";
import CounterButtonContainer from "./containers/CounterButtonContainer";
import CounterContainer from "./containers/CounterContainer";
import CurrentCityContainer from "./containers/CurrentCityContainer";
import CityDropDownContainer from "./containers/CityDropDownContainer";
import ThermostatContainer from "./containers/ThermostatContainer";
import ChangeTemperatureContainer from "./containers/ChangeTemperatureContainer";
import UserButtonsContainer from "./containers/UserButtonsContainer";
import UsersContainer from "./containers/UsersContainer";
import ModalContainer from "./containers/ModalContainer";
import ShowModalContainer from "./containers/ShowModalContainer";
import VideoPlayerContainer from "./containers/VideoPlayerContainer";
import VideoTextBoxContainer from "./containers/VideoTextBoxContainer";
import SearchTextBox from "./components/SearchTextBox";
import SortUsers from "./components/SortUsers";
import ScaleVideoContainer from "./containers/ScaleVideoContainer";

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
