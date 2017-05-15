import React from 'react';
import CounterButtonContainer from "./containers/CounterButtonContainer";
import CounterContainer from "./containers/CounterContainer";
import SpecialTextContainer from "./containers/SpecialTextContainer";
import SpecialTextBoxContainer from "./containers/SpecialTextBoxContainer";
import UsersContainer from "./containers/UsersContainer";
import UserButtonsContainer from "./containers/UserButtonsContainer";
import ThermostatContainer from "./containers/ThermostatContainer";
import ChangeTemperatureContainer from "./containers/ChangeTemperatureContainer";
import VideoPlayerContainer from "./containers/VideoPlayerContainer";
import VideoTextBoxContainer from "./containers/VideoTextBoxContainer";
import CurrentCityContainer from "./containers/CurrentCityContainer"
import CityDropdownContainer from "./containers/CityDropdownContainer";
import SearchTextBoxContainer from "./containers/SearchTextBoxContainer";
import SortUsersContainer from "./containers/SortUsersContainer";
import ScaleVideoContainer from "./containers/ScaleVideoContainer";
import ModalContainer from "./containers/ModalContainer"
import ShowModalContainer from "./containers/ShowModalContainer"


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
          <CityDropdownContainer />
           <br />
          <ChangeTemperatureContainer />
          <br />
          <SearchTextBoxContainer />
          <br />
          <VideoTextBoxContainer />
          <br />
          <SortUsersContainer />
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
