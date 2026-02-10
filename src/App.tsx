// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import Yes from './pages/Yes';
import No from './pages/No';
import DateSetting from './pages/DateSetting';
import Thanks from './pages/Thanks';
import Start from './pages/Start';
import Oh from './pages/Oh';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/Yes' element={<Yes />} />
      <Route path='/Oh' element={<Oh />} />
      <Route path='/No' element={<No />} />
      <Route path='/DateSetting' element={<DateSetting/>} />
      <Route path='/Thanks' element={<Thanks/>}/>
      <Route path='/Home' element={<Home/>}/>
    </Routes>
  );
}

export default App;
