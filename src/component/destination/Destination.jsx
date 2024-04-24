import React from 'react';
import DestinationNav from '../navigation/DestinationNav';
import data from '../../data.json';

const Destination = () => {
    return (
        <div className='destination-page'>
            <h1 className='destination-heading'>Pick your destination</h1>
            <div className='destinaiton-navigation'><DestinationNav /></div>
            <figure className='globe'>
                <img src={data["destinations"][0]["images"]["png"]} alt="this is moon" />
            </figure>
            <div className='planet'>
                <h1>Moon</h1>
                <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2  and Apollo 11 landing sites.</p>
                <div className='distance-time'>
                    <div>
                        <div>AVG. DISTANCE</div>
                        <div>384,400 KM</div>
                    </div>
                    <div>
                        <div>Est. travel time</div>
                        <div>3 days</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Destination
