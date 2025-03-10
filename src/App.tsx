// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import Yes from './pages/Yes';
import No from './pages/No';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Yes' element={<Yes />} />
      <Route path='/No' element={<No />} />
    </Routes>
  );
}

export default App;
