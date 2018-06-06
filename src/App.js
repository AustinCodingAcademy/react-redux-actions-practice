import React from 'react';
import CounterButtonContainer from "./containers/CounterButtonContainer";
import SpecialTextBoxContainer from "./containers/SpecialTextBoxContainer";
import CounterContainer from "./containers/CounterContainer";
import SpecialTextContainer from "./containers/SpecialTextContainer";
import UserButtonsContainer from "./containers/UserButtonsContainer";
import Thermostat from "./components/Thermostat";
import UsersContainer from "./containers/UsersContainer";
import ChangeTemperature from "./components/ChangeTemperature";
import VideoPlayerContainer from "./containers/VideoPlayerContainer";
import VideoTextBoxContainer from "./containers/VideoTextBoxContainer";
import CurrentCityContainer from "./containers/CurrentCityContainer";
import CityDropDownContainer from "./containers/CityDropDownContainer";
import SearchTextBoxContainer from "./containers/SearchTextBoxContainer";
import SortUsersContainer from "./containers/SortUsersContainer";
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
          <UserButtonsContainer />
          <br />
          <CityDropDownContainer />
           <br />
          <ChangeTemperature />
          <br />
          <SearchTextBoxContainer />
          <br />
          <VideoTextBoxContainer />
          <br />
          <SortUsersContainer />
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
          <Thermostat />
          <br />
          <VideoPlayerContainer />
          <br />
          
          
        </div>
        <div className="container">
          <UsersContainer />
        </div>
        <Modal />
      </div>
  );
}
export default App;