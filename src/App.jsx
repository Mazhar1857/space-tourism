import { useEffect, useState } from 'react'
import './App.css'
import MainNav from './component/navigation/MainNav';
import LandingPage from './component/landingPage/LandingPage';
import Destination from './component/destination/Destination';
import Crew from './component/crew/Crew';
import Technology from './component/technology/Technology';

function App() {
  const [isActive, setIsActive] = useState(1);
  const [bg, setBg] = useState('home')

  const toggleNav = (n) => {
    setIsActive(n)
  }

  useEffect(() => {
    switch (isActive) {
      case 1:
        setBg('home');
        break;
      case 2:
        setBg('destination');
        break;
      case 3:
        setBg('crew');
        break;
      case 4:
        setBg('technology');
        break;
    }
  }, [isActive])


  return (
    <div className={`container ${bg}`}>
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

      <div className={`crew ${isActive === 4 ? 'active' : 'deactive'}`}>
        <Technology />
      </div>
    </div>
  )
}

export default App