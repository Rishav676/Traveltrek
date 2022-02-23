import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hotels from './pages/Hotels';
import Home from './pages/Home';
import Contactus from './pages/Contactus';

function App() {
  return (
    
   <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/hotels" element={<Hotels />} />
           <Route path="/contactus" element={<Contactus />} />
          </Routes>
    </BrowserRouter> 
    
   
    
   
  );
}

export default App;
