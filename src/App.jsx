import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import LandingCollection from './components/LandingCollection';
import DashBoardCollection from './components/dashboard/DashboardCollection';
import Login from './components/login';
import Signup from './components/signup';
import ProfilePage from './components/profile';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingCollection/>} />
      <Route path='/dashboard' element={<DashBoardCollection/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/profile" element={<ProfilePage/>} />
    </Routes>
  </Router>
  )
}

export default App
