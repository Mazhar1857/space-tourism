import React, { useEffect, useState } from 'react';
import './technologyNav.css';

const TechnologyNav = ({ toggleTechnology }) => {

    const [isActive, setIsActive] = useState(1);

    const toggleTechnologyNav = (n) => {
        toggleTechnology(n);
        setIsActive(n);

    }

    return (
        <div className='technology-nav'>
            <div className={isActive === 1 ? 'active' : 'deactive'} onClick={() => toggleTechnologyNav(1)}>1</div>
            <div className={isActive === 2 ? 'active' : 'deactive'} onClick={() => toggleTechnologyNav(2)}>2</div>
            <div className={isActive === 3 ? 'active' : 'deactive'} onClick={() => toggleTechnologyNav(3)}>3</div>
        </div>
    )
}

export default TechnologyNav
