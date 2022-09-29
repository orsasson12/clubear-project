import './App.css';

import Home from './pages/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import SingleClub from './components/Clubs/SingleClub';
import AdminLogin from './components/AdminLogin/AdminLogin';
import About from './components/About/About';
function App() {

  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path=':clubId' element={<SingleClub />} />
        <Route path='/login' element={<AdminLogin />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
