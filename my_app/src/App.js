import logo from './logo.svg';
import './App.css';
import Joblist from './Component/List';

import Topic from './Component/topic';
import RandomNamePicker from './Component/RandomNamePicker';
import Location from './Component_2/location';
import Api from './Component_3/api';
function App() {
  return (
    <div className="App">
      <Api />
     {/* <Location/>
      <RandomNamePicker />*/}
    </div>
  );
}

export default App;
