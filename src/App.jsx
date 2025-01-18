import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import LandingCollection from './components/LandingCollection';
import DashBoardCollection from './components/dashboard/DashboardCollection';
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingCollection/>} />
      <Route path='/dashboard' element={<DashBoardCollection/>} />
    </Routes>
  </Router>
  )
}

export default App
