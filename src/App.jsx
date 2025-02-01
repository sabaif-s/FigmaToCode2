import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import LandingCollection from './components/LandingCollection';
import DashBoardCollection from './components/dashboard/DashboardCollection';
import Login from './components/login';
import Signup from './components/signup';
import ProfilePage from './components/profile';
import CoinCheck from './components/coin/Coin';
import WithdrawPage from './components/withdraw/Withdraw';
import EditProfile from './components/edit/EditProfile';
import ChatPractice from './components/chart/Practice';
function App() {
   

  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingCollection/>} />
      <Route path='/dashboard' element={<DashBoardCollection/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/coin" element={<CoinCheck/>}/>
      <Route path="/withdraw" element={<WithdrawPage/>}/>
      <Route path="/edit" element={<EditProfile/>}/>
      <Route path="/chat" element={<ChatPractice/>}/>
    </Routes>
  </Router>
  )
}

export default App
