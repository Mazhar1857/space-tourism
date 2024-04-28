import React, { useState } from 'react';
import TechnologyNav from '../navigation/TechnologyNav';
import './technology.css';
import data from '../../data.json'

const Technology = () => {
    const [isActive, setIsActive] = useState(1);
    const toggleTechnology = (n) => {
        setIsActive(n)
    }

    const handleTouchStart = (event) => {
        // Handle touch start event
        console.log('Touch started');
        const touchStartX = event.touches[0].clientX;
        event.currentTarget.setAttribute('data-touch-start-x', touchStartX);
    };

    const handleTouchEnd = (event) => {
        // Handle touch end event
        console.log('Touch ended');
        const touchStartX = parseInt(event.currentTarget.getAttribute('data-touch-start-x'), 10);
        const touchEndX = event.changedTouches[0].clientX;
        const touchDeltaX = touchEndX - touchStartX;

        if (touchDeltaX > 50) {
            setIsActive((pre) => {
                if (pre === 1) {
                    return 3;
                } else {
                    return pre - 1;
                }
            })
        } else if (touchDeltaX < -50) {
            setIsActive((pre) => {
                return ((pre % 3) + 1);
            })
        }        
    };


    return (
        <div className='technology-page-parent'>
            <div className='technology-page'>
                <div className='technology-heading'>SPACE LAUNCH 101</div>
                {Object.entries(data)[2][1].map((item, index) => {
                    return <figure className={`technology-image ${isActive === (index + 1) ? 'active' : 'deactive'}`} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                        <img className='portrait' src={item["images"]["portrait"]} alt="" />
                        <img className='landscape' src={item["images"]["landscape"]} alt="" />
                    </figure>
                })}
                <div className='technology-navigation'><TechnologyNav toggleTechnology={toggleTechnology} active={isActive} /></div>

                {Object.entries(data)[2][1].map((item, index) => {
                    return <div className={`technology-detail ${isActive === (index + 1) ? 'active' : 'deactive'}`}>
                        <div className='technology-terminology'>THE TERMINOLOGY...</div>
                        <div className='technology-name'>{item["name"].toUpperCase()}</div>
                        <div className='technology-description'>{item["description"]}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Technology