import React, { useEffect } from 'react';
import './index.css';
import Card from './card';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';

const Index = ({card1,card2,card3,card4,card5}) =>{

    const {ref,inView} = useInView({
        threshold:0.4
    });
    
    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();
    const animation4 = useAnimation();
    const animation5 = useAnimation();
    

    useEffect(() => {
        if(inView){
            animation1.start({
                x:0,
                transition: {
                    type:'spring',
                    duration:2,
                    bounce:0.3,
                    delay:0.05
                }
            })
            animation2.start({
                x:0,
                transition: {
                    type:'spring',
                    duration:2,
                    bounce:0.3,
                    delay:0.15
                }
            })
            animation3.start({
                x:0,
                transition: {
                    type:'spring',
                    duration:2,
                    bounce:0.3,
                    delay:0.25
                }
            }) 
            animation4.start({
                x:0,
                transition: {
                    type:'spring',
                    duration:2,
                    bounce:0.3,
                    delay:0.35
                }
            }) 
            animation5.start({
                x:0,
                transition: {
                    type:'spring',
                    duration:2,
                    bounce:0.3,
                    delay:0.45
                }
            })  
        }
        if(!inView){
            animation1.start({x:'-100vw'});
            animation2.start({x:'-100vw'});
            animation3.start({x:'-100vw'});
            animation4.start({x:'-100vw'});
            animation5.start({x:'-100vw'});
        }
        console.log('sdads');
    }, [inView])


    return (
        <div className='pricing-section'>y
            <div ref={ref} className='pricing-wrapper'>
                <h1 className='pricing-heading'>cool stuff i know</h1>
                <div className='pricing-container'                    > 
                    <motion.div animate={animation1}>
                        <Card  {...card1}/>
                    </motion.div >
                    <motion.div animate={animation2}>
                        <Card  {...card2}/>
                    </motion.div >
                    <motion.div animate={animation3}>
                        <Card  {...card3}/>
                    </motion.div >
                    <motion.div animate={animation4}>
                        <Card  {...card4}/>
                    </motion.div >
                    <motion.div animate={animation5}>
                        <Card  {...card5}/>
                    </motion.div >
                </div>
            </div>
        </div>
    )
}

export default Index
