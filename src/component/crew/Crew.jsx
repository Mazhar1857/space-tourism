import React, { useState } from 'react';
import './crew.css'
import data from '../../data.json';
import CrewNav from '../navigation/CrewNav';
const Crew = () => {
    const [isActive, setIsActive] = useState(1);

    const toggleCrew = (n) => {
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
                    return 4;
                } else {
                    return pre - 1;
                }
            })
        } else if (touchDeltaX < -50) {
            setIsActive((pre) => {
                return ((pre % 4) + 1);
            })
        }
    };

    return (
        <div className='crew-page-parent'>
            <div className='crew-page'>
                <div className='crew-heading'>MEET YOUR CREW</div>
                {Object.entries(data)[1][1].map((item, index) => {
                    return <div className={`crew-pic ${isActive === (index + 1) ? 'active' : 'deactive'}`}>
                        <div className={`img ${isActive === (index + 1) ? 'active' : 'deactive'}`} style={{ backgroundImage: `url(${item["images"]["png"]})` }} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}></div>
                    </div>
                })}
                <div className='crew-navigation'><CrewNav toggleCrew={toggleCrew} active={isActive} /></div>
                {Object.entries(data)[1][1].map((item, index) => {

                    return <div className={`crew-detail ${isActive === (index + 1) ? 'active' : 'deactive'}`}>
                        <div className='crew-role'>{item["role"].toUpperCase()}</div>
                        <div className='crew-name'>{item["name"].toUpperCase()}</div>
                        <div className='crew-bio'>{item["bio"]}</div>
                    </div>

                })}


            </div>
        </div>
    )
}

export default Crew
