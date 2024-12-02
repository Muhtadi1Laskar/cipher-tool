import { BrowserRouter as Routes } from 'react-router-dom';
import CipherToolsNavbar from './Components/Navbar';
import './styles/app.css';

function App() {

  return (
    <>
       <CipherToolsNavbar />
      <Routes>
        {/* Add your routes here */}
      </Routes>
    </>
  )
}

export default App
