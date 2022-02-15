import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Album from "./pages/Album"
import Login from "./pages/Login"
import './App.css';
import Navbar from './components/Navbar';

// Try adding app.const for storing path variables

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/album" element={<Album />} />
        </Routes>
      </div >
    </Router>
  );
}

export default App;
