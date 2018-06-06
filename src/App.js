import React from 'react';
import CounterButton from "./components/CounterButton";
import SpecialTextBoxContainer from "./containers/SpecialTextBoxContainer";
import Counter from "./components/Counter";
import SpecialTextContainer from "./containers/SpecialTextContainer";
import UserButtons from "./components/UserButtons";
import ThermostatContainer from "./containers/ThermostatContainer";
import Users from "./components/Users";
import ChangeTemperatureContainer from "./containers/ChangeTemperatureContainer";
import VideoPlayer from "./components/VideoPlayer";
import VideoTextBox from "./components/VideoTextBox";
import CurrentCityContainer from "./containers/CurrentCityContainer";
import CityDropDownContainer from "./containers/CityDropDownContainer";
import SearchTextBox from "./components/SearchTextBox";
import SortUsers from "./components/SortUsers";
import ScaleVideo from "./components/ScaleVideo";
import Modal from "./components/Modal";
import ShowModal from "./components/ShowModal";

function App() {
  return (
      <div className="App">
        <div className="container">
          <CounterButton />
          <br />
          <SpecialTextBoxContainer />
          <br />
          <UserButtons />
          <br />
          <CityDropDownContainer />
           <br />
          <ChangeTemperatureContainer />
          <br />
          <SearchTextBox />
          <br />
          <VideoTextBox />
          <br />
          <SortUsers />
          <br />
          <ScaleVideo />
          <br />`
          <ShowModal />
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