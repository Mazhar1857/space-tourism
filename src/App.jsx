import { useState } from 'react'
import './App.css'
import MainNav from './component/navigation/MainNav';
import LandingPage from './component/landingPage/LandingPage';
import Destination from './component/destination/Destination';
import Crew from './component/crew/Crew';

function App() {
  const [isActive, setIsActive] = useState(1);

  const toggleNav = (n) => {
    setIsActive(n)
  }


  return (
    <div className='container destination'>
      <div className='navigation'>
        <MainNav toggleNav={toggleNav} />
      </div>

      <div className={`home ${isActive === 1 ? 'active' : 'deactive'}`}>
        <LandingPage />
      </div>

      <div className={`destination ${isActive === 2 ? 'active' : 'deactive'}`}>
        <Destination />
      </div>

      <div className={`crew ${isActive === 3 ? 'active' : 'deactive'}`}>
        <Crew />
      </div>

    </div>
  )
}

export default App
