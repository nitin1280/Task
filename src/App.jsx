import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sign from '../Page/Sign';
import Home from '../Page/Home/Home';
function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
    <Route path="/register" element={<Sign/>}/>
      <Route path="/" element={<Home/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App