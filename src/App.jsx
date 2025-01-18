import { useState } from 'react'
import LandingPageFirst from './components/LandingPageFirst';
import LandingPageSecond from './components/LandingPageSecond';
import LandingPageThree from './components/LandingPageThree';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <LandingPageFirst/>
       <LandingPageSecond/>
       <LandingPageThree/>
     
    </>
  )
}

export default App
