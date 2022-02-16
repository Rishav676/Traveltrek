import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TT from './pages/Navbar';
function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/flight" element={<TT />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
