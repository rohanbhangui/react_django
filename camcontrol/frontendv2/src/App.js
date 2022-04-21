import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cam from './cam';
import Instructions from './instructions';

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Instructions/>}/>
      <Route path='selfie' element={<Cam/>}/>
    </Routes>
  );
}

export default App;
