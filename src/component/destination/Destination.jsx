import React, { useEffect, useState } from 'react';
import DestinationNav from '../navigation/DestinationNav';
import data from '../../data.json';
import './destination.css';

const Destination = () => {

    const [isActive, setIsActive] = useState(1)

    const toggleGlobe = (n) => {
        setIsActive(n)
    }

    return (
        <div className='destination-page-parent'>
            <div className='destination-page'>
                <h1 className='destination-heading'>PICK YOUR DESTINATION</h1>
                <div className='destinaiton-navigation'><DestinationNav toggleGlobe={toggleGlobe} /></div>
                <figure className='globe-pic'>
                    {Object.entries(data)[0][1].map((item, index) => {
                        return <img className={isActive === (index + 1) ? 'active' : 'deactive'} src={item["images"]["png"]} alt="this is moon" />
                    })}
                </figure>

                {Object.entries(data)[0][1].map((item, index) => {
                    return <div className={`globe-detail ${isActive === (index + 1) ? 'active' : 'deactive'}`}>
                        <h1>{item["name"]}</h1>
                        <p>{item["description"]}</p>
                        <div className='distance-time'>
                            <div>
                                <div>AVG. DISTANCE</div>
                                <div>{item["distance"]}</div>
                            </div>
                            <div>
                                <div>Est. travel time</div>
                                <div>{item["travel"]}</div>
                            </div>
                        </div>
                    </div>

                })}
            </div>
        </div>
    )
}

export default Destination
