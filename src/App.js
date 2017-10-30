import React from 'react';
import CounterButtonContainer from './containers/CounterButtonContainer';
import SpecialTextBoxContainer from './containers/SpecialTextBoxContainer';
import CounterContainer from './containers/CounterContainer';
import SpecialTextContainer from './containers/SpecialTextContainer';
import UserButtonsContainer from './containers/UserButtonsContainer';
import ThermostatContainer from './containers/ThermostatContainer';
import UsersContainer from './containers/UsersContainer';
import ChangeTemperatureContainer from './containers/ChangeTemperatureContainer';
import VideoPlayerContainer from './containers/VideoPlayerContainer';
import VideoTextBoxContainer from './containers/VideoTextBoxContainer';
import CurrentCityContainer from './containers/CurrentCityContainer';
import CityDropDownContainer from './containers/CityDropDownContainer';
import SearchTextBoxContainer from './containers/SearchTextBoxContainer';
import SortUsersContainer from './containers/SortUsersContainer';
import ScaleVideoContainer from './containers/ScaleVideoContainer';
import ModalContainer from './containers/ModalContainer';
import ShowModalContainer from './containers/ShowModalContainer';

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
