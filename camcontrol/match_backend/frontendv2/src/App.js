import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cam from './camf/cam.js';
import Instructions from './instructionsf/instructions.js';
import Instructions2 from './instructionsf/instructions2';


function App() {
  return (
    <Routes>
      <Route path='/instructions' element= {<Instructions/>}/>
      <Route path='instructions2' element={<Instructions2/>}/>
      <Route path='selfie' element={<Cam/>}/>
      
    </Routes>
  );
}

export default App;
