import React, { useEffect, useState } from 'react';
import './mainNav.css';

const MainNav = () => {

    const [mobileNav, setMobileNav] = useState(false);
    const [IsActive, setActive] = useState(0);

    const handleActiveNav = (n) => {
        setActive(n);
    }

    useEffect(() => {
        if (mobileNav) {
            document.documentElement.classList.add('model-open')
            return () => {
                document.documentElement.classList.remove('model-open')
            }
        }
    })

    const toggleMobileNav = () => {
        setMobileNav((pre) => {
            return !pre;
        })
    }

    return (
        <div className='main-navigation'>
            <div className='main-nav-logo'>
                <a href=""> <img src="/assets/shared/logo.svg" alt="" /></a>
                <div className='main-nav-horizontal-line'></div>
            </div>
            <button className='mobile-nav-button' onClick={toggleMobileNav}><img src={!mobileNav ? '/assets/shared/icon-hamburger.svg' : '/assets/shared/icon-close.svg'} alt="" /></button>
            <ul role='list' className={`main-nav-list ${mobileNav ? 'mobile-nav' : ''}`}>
                <li className={IsActive === 1 ? 'active' : ''} onClick={() => handleActiveNav(1)}><a>HOME</a></li>
                <li className={IsActive === 2 ? 'active' : ''} onClick={() => handleActiveNav(2)}><a>DESTINATION</a></li>
                <li className={IsActive === 3 ? 'active' : ''} onClick={() => handleActiveNav(3)}><a >CREW</a></li>
                <li className={IsActive === 4 ? 'active' : ''} onClick={() => handleActiveNav(4)}><a >TECHNOLOGY</a></li>
            </ul>
        </div>
    )
}

export default MainNav
