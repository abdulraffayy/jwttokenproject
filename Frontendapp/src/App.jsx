import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './App.css'
import Login from './login/Login'
import Signup from './Signup/Signup'
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Navbar" element={<Navbar />} />

      </Routes>
    </Router>
  )
}

export default App
