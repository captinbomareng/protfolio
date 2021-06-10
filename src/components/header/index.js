import React, { useEffect, useState } from 'react'
import './index.css';
import Navbar from '../navbar/index';
import Particale from '../particale/index';
import Typed from './typed/index';

function Header() {
    const [offsetY, setOffsetY]= useState(0);

    const handleScroll =()=>{
        setOffsetY(window.pageYOffset);
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    }, [])
    return (
        <>
            <Particale/>
            <Navbar/>
            <div className='header-wrapper' >
                <div className='main-info' style={{transform:`translateY(${-offsetY* 0.7}px)`}}>
                    <h1>my portfolio</h1>
                    <Typed/>
                </div>
            </div>
        </>
    )
}

export default Header


