import React from 'react';
import CounterButtonContainer from "./components/CounterButtonContainer";
import SpecialTextBoxContainer from "./components/SpecialTextBoxContainer";
import Counter from "./components/Counter";
import SpecialTextContainer from "./components/SpecialTextContainer";
import UserButtonsContainer from "./components/UserButtonsContainer";
import ThermostatContainer from "./components/ThermostatContainer";
import UsersContainer from "./components/UsersContainer";
import ChangeTemperatureContainer from "./components/ChangeTemperatureContainer";
import VideoPlayerContainer from "./components/VideoPlayerContainer";
import VideoTextBoxContainer from "./components/VideoTextBoxContainer";
import CurrentCityContainer from "./components/CurrentCityContainer";
import CityDropDownContainer from "./components/CityDropDownContainer";
import SearchTextBoxContainer from "./components/SearchTextBoxContainer";
import SortUsersContainer from "./components/SortUsersContainer";
import ScaleVideoContainer from "./components/ScaleVideoContainer";
import ModalContainer from "./components/ModalContainer";
import ShowModalContainer from "./components/ShowModalContainer";

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
          <Counter />
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
