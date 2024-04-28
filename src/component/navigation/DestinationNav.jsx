import React, { useEffect, useState } from 'react';
import './destinationNav.css';

const DestinationNav = ({ toggleGlobe }) => {

    const [isActive, setIsActive] = useState(1);

    const toggleDestinationNav = (n) => {
        toggleGlobe(n);
        setIsActive(n);
    }

    return (
        <div className='destination-nav'>
            <div className={isActive === 1 ? 'active' : ''} onClick={() => toggleDestinationNav(1)}>MOON</div>
            <div className={isActive === 2 ? 'active' : ''} onClick={() => toggleDestinationNav(2)}>MARS</div>
            <div className={isActive === 3 ? 'active' : ''} onClick={() => toggleDestinationNav(3)}>EUROPA</div>
            <div className={isActive === 4 ? 'active' : ''} onClick={() => toggleDestinationNav(4)}>TITAN</div>
        </div>
    )
}

export default DestinationNav
