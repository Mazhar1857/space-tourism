import React, { useEffect, useState } from 'react';
import './destinationNav.css';

const DestinationNav = ({ toggleGlobe }) => {

    const [isActive, setIsActive] = useState(1);

    const toggleDestinationNav = (n) => {
        toggleGlobe(n);
        setIsActive(n);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setIsActive((pre) => {
                return (pre % 4) + 1;
            })
            toggleGlobe(((isActive) % 4) + 1)

        }, 3000);

        return () => {
            clearInterval(interval);
        }

    })

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
