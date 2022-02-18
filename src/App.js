import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hotels from './pages/Hotels';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/hotels" element={<Hotels />} />
          </Routes>
    </BrowserRouter>
    
   
  );
}

export default App;
