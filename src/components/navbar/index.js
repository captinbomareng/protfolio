import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import {FaTimes,FaBars } from 'react-icons/fa';
import { AiOutlineQrcode } from 'react-icons/ai';

function Navbar() {

    const [click, setClick]= useState(false);
    const [button,setButton]=useState(true);

    const hanadeClick = () =>{
        setClick(!click);
     }

    const closeMobileMenu =()=>{
        setClick(false);
     }

    const showButton = () =>{
        if(window.innerWidth>960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize',showButton);

    return (
        <nav>  
            <Link to='/' className='nav-logo'>
              
              NitzanCook
            </Link>      
            <div className='navbar-container'>           
                <div onClick={hanadeClick} className='menu-icon'>
                    {click ? <FaTimes /> : <FaBars/>}
                </div>
                <ul className={click ? 'nav-manu-active' :'nav-menu'}>
                    <li className='nav-item'>
                        <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/shop' className='nav-links' onClick={closeMobileMenu}>
                            Shop
                        </Link>
                    </li>
                    <li className='nav-item-btn'>
                        {button ? (
                            <Link to='/sign-up' className='nav-btn-links'>
                                 <button className='btn'>Sign Up</button>
                            </Link>
                        ):(
                            <Link to='/sign-up' className='nav-btn-links'>
                               <button className='btn'>Sign Up</button>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
