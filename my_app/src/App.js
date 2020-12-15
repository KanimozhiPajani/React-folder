import logo from './logo.svg';
import './App.css';
import Joblist from './Component/List';
import Topic from './Component/topic';


import RandomNameGen from './Component/RandomNameGen';

function App() {
  return (
    <div className="App">

      <header className ="App-header">
       <RandomNameGen />
      </header>
      
       {/*<Joblist />*/}
    </div>
  );
}

export default App;
