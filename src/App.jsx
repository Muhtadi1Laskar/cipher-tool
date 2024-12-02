import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CipherToolsNavbar from './Components/Navbar';
import LandingPageComponent from './Components/LandingPageComponent';
import './styles/app.css';
import './styles/LandingPage.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageComponent />} />
        <Route path="/tools" element={<CipherToolsNavbar />} />
      </Routes>
    </Router>
  )
}

export default App
