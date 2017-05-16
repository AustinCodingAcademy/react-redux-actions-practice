import React from 'react';
import CounterButtonContainer from "./containers/CounterButtonContainer";
import SpecialTextBoxContainer from "./containers/SpecialTextBoxContainer";
import CounterContainer from "./containers/CounterContainer";
import SpecialTextContainer from "./containers/SpecialTextBoxContainer";
import UserButtonsContainer from "./containers/UserButtonContainer";
import ThermostatContainer from "./containers/ThermostatContainer";
import UserContainer from "./containers/UserContainer";
import ChangeTemperatureContainer from "./containers/ChangeTemperatureContainer";
import VideoPlayerContainer from "./containers/VideoPlayerContainer";
import VideoTextBoxContainer from "./containers/VideoTextBoxContainer";
import CurrentCityContainer from "./containers/CurrentCityContainer";
import CityDropDownContainer from "./containers/CityDropDownContainer";
import SearchTextBoxContainer from "./containers/SearchTextBoxContainer";
import SortUsersContainer from "./containers/SortUsersContainers";
import ScaleVideoContainer from "./containers/ScaleVideoContainer";
import ModalContainer from "./containers/ModalContainer";
import ShowModalContainer from "./containers/ShowModalContainer";

function App() {
  return (
      <div className="App">
        <div className="containers">
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
          <UserContainer />
        </div>
        <ModalContainer />
      </div>
  );
}
export default App;
