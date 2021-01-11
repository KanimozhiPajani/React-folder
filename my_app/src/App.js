import logo from './logo.svg';
import './App.css';
import Joblist from './Component/List';
import Topic from './Component/topic';
<<<<<<< HEAD


import RandomNameGen from './Component/RandomNameGen';

function App() {
  return (
    <div className="App">

      <header className ="App-header">
       <RandomNameGen />
      </header>
      
       {/*<Joblist />*/}
=======
import RandomNamePicker from './Component/RandomNamePicker';
import Location from './Component_2/location';
function App() {
  return (
    <div className="App">
      <Location/>
      {/*<RandomNamePicker />*/}
>>>>>>> Branch-1
    </div>
  );
}

export default App;
