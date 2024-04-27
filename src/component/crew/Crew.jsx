import React, { useState } from 'react';
import './crew.css'
import data from '../../data.json';
import CrewNav from '../navigation/CrewNav';
const Crew = () => {
    const [isActive, setIsActive] = useState(1);

    const toggleCrew = (n) => {
        setIsActive(n)
    }
    return (
        <div className='crew-page-parent'>
            <div className='crew-page'>
                <div className='crew-heading'>MEET YOUR CREW</div>
                {Object.entries(data)[1][1].map((item, index) => {
                    return <div className={`crew-pic ${isActive === (index + 1) ? 'active' : 'deactive'}`}>
                        <div className={`img ${isActive === (index + 1) ? 'active' : 'deactive'}`} style={{ backgroundImage: `url(${item["images"]["png"]})` }} ></div>
                    </div>
                })}
                <div className='crew-navigation'><CrewNav toggleCrew={toggleCrew} /></div>
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
