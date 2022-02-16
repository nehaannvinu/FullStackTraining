import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Album from "./pages/Album"
import Login from "./pages/Login"
import Error from './pages/Error';
import './App.css';
import Navbar from './components/Navbar';
import useToken from './utils/useToken';
import {home, album} from "./constants/routes"


function App() {

  const {token, setToken} = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="*" element={<Error/>}/>
          <Route path={home} element={<Home />} />
          <Route path={album} element={<Album />} />
        </Routes>
      </div >
    </Router>
  );
}

export default App;
