import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hotels from './pages/Hotels';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Planyourtrip from './pages/Planyourtrip';


function App() {
  return (
    
   <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/hotels" element={<Hotels />} />
           <Route path="/planyoutrip" element={<Planyourtrip />} />
           <Route path="/contactus" element={<Contactus />} />
          </Routes>
    </BrowserRouter> 
    
   
    
   
  );
}

export default App;
