import React from 'react';
import TechnologyNav from '../navigation/TechnologyNav';
import './technology.css';
import data from '../../data.json'

const Technology = () => {
    return (
        <div className='technology-page'>
            <div className='technology-heading'>{data["technology"][0]["name"]}</div>
            <figure className='technology-image'>
                <img src={data["technology"][0]["images"]["portrait"]} alt="" />
            </figure>
            <div className='technology-navigation'><TechnologyNav /></div>
            <div className='technology-detail'>
                 {data["technology"][0]["description"]}</div>
        </div>
    )
}

export default Technology