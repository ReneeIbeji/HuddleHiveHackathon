import './App.css';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Homepage from './Pages/Homepage.jsx';
import Goals from './Pages/Goals.jsx';
import Community from './Pages/Community.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={< Homepage/>}/>
          <Route path="/goals" element={< Goals/>}/>
          <Route path="/community" element={< Community/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
