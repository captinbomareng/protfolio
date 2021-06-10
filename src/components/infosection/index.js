import React, { useEffect, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Oxygen from './oxygen/index';
import Snake from './snake/index';
import styled from 'styled-components';

function InfoSection(props) {

    const {lightBg, imgposition,lightTopLine,lightText,topLine,headLine, lightTextDesc,description,buttonLable, img, alt, start,color, borderRadius,boolButton}=props;


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
            <div className={'info-sec ' + lightBg}  >
                <Container className='container' parallax={`${offsetY>1000 ? 0:1000-offsetY}px`} >
                    <Snake />
                    <div className={'info-row ' + imgposition} > 
                        <div className='info-column'>
                            <div className='text-wrapper'>
                                <div className={'top-line ' +lightTopLine}>{topLine}</div>
                                <h1 className={'heading '+ lightText}>{headLine}</h1>
                                <p className={'subtitle ' +lightTextDesc}>{description}</p>
                                {boolButton&&(
                                <Link to='/sign-up'>
                                   <button>{buttonLable}</button>
                                </Link>)}
                            </div>
                        </div>
                        <div className='info-column' >
                            <Oxygen/>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default InfoSection

const Container = styled.div`
    transform: translateY(${props=>props.parallax});
`
