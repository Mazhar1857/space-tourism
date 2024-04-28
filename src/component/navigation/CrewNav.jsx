import React, { useEffect, useState } from 'react';
import './crewNav.css';

const CrewNav = ({ toggleCrew, active }) => {
    const [isActive, setIsActive] = useState(1);

    const toggleCrewMember = (n) => {
        toggleCrew(n);
        setIsActive(n);
    }

    useEffect(() => {
        setIsActive(active)
    }, [active])

    return (
        <div className='crew-nav'>
            <div className={isActive === 1 ? 'active' : ''} onClick={() => toggleCrewMember(1)}></div>
            <div className={isActive === 2 ? 'active' : ''} onClick={() => toggleCrewMember(2)}></div>
            <div className={isActive === 3 ? 'active' : ''} onClick={() => toggleCrewMember(3)}></div>
            <div className={isActive === 4 ? 'active' : ''} onClick={() => toggleCrewMember(4)}></div>
        </div>
    )
}

export default CrewNav
