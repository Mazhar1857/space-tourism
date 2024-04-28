import React, { useState } from 'react';
import TechnologyNav from '../navigation/TechnologyNav';
import './technology.css';
import data from '../../data.json'

const Technology = () => {
    const [isActive, setIsActive] = useState(1);
    const toggleTechnology = (n) => {
        setIsActive(n)
    }
    return (
        <div className='technology-page-parent'>
            <div className='technology-page'>
                <div className='technology-heading'>SPACE LAUNCH 101</div>
                {Object.entries(data)[2][1].map((item, index) => {
                    return <figure className={`technology-image ${isActive === (index + 1) ? 'active' : 'deactive'}`}>
                        <img className='portrait' src={item["images"]["portrait"]} alt="" />
                        <img className='landscape' src={item["images"]["landscape"]} alt="" />
                    </figure>
                })}
                <div className='technology-navigation'><TechnologyNav toggleTechnology={toggleTechnology} /></div>

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