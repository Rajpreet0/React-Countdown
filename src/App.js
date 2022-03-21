/*
* 
* Importing Files 
*  
*   I. CSS File for App.js
*  II. Importing Countdown.js File from Components Folder
*/
import './App.css';
import Countdown from './components/Countdown';

function App() {
  
  
  return (
    <div className="App">
{/*
*    Initializing the Countdown.js File in App.js 
*    -> Displaying it on the Website
*/}
      <Countdown/>
    </div>
  );
}

export default App;
