import React, {useEffect, useRef, useState} from 'react'
import {motion} from 'framer-motion';
import './index.css';
import styled from 'styled-components';
import reactDom from 'react-dom';

const snakeVarient={
    start1: {
        x: [0,520, 520, 0 ,0],
        y: [0, 0, 400, 400, 0] ,
        transition: {
            repeat: Infinity,
            duration: 6,
            repeatType: "loop",
            type: "spring",
          }
      },
      start2: {
        x: [0,520, 520, 0 ,0],
        y: [0, 0, 400, 400, 0] ,
        transition: {
            delay:0.05,
            repeat: Infinity,
            duration: 6,
            repeatType: "loop",
            type: "spring",
          }
      },
      start3: {
        x: [0,520, 520, 0 ,0],
        y: [0, 0, 400, 400, 0] ,
        transition: {
            delay: 0.1,
            repeat: Infinity,
            duration: 6,
            repeatType: "loop",
            type: "spring",
          }
      },
      start4: {
        x: [0,520, 520, 0 ,0],
        y: [0, 0, 400, 400, 0] ,
        transition: {
            delay: 0.15,
            repeat: Infinity,
            duration: 6,
            repeatType: "loop",
            type: "spring",
          }
      },
      start5: {
        x: [0,520, 520, 0 ,0],
        y: [0, 0, 400, 400, 0] ,
        transition: {
            delay: 0.2,
            repeat: Infinity,
            duration: 6,
            repeatType: "loop",
            type: "spring",
          }
      }
}



function Snake() {

    const [start,setStart] = useState(true)
    const [cube1,setCube1]= useState(true);
    const [cube2,setCube2]= useState(false);
    const [cube3,setCube3]= useState(false);
    const [cube4,setCube4]= useState(false);
    const inputRef = useRef();
    const cubeRef1 = useRef();
    const cubeRef2 = useRef();
    const cubeRef3 = useRef();
    const cubeRef4 = useRef();

    const snakeHnadeler = ()=>{
      if (inputRef.current.getBoundingClientRect().x<cubeRef1.current.getBoundingClientRect().x +35 && inputRef.current.getBoundingClientRect().x>cubeRef1.current.getBoundingClientRect().x -35&&
      inputRef.current.getBoundingClientRect().y<cubeRef1.current.getBoundingClientRect().y +35 && inputRef.current.getBoundingClientRect().y>cubeRef1.current.getBoundingClientRect().y -35
      ){
        setCube1(false);
        setCube2(true);
      }
      if (inputRef.current.getBoundingClientRect().x<cubeRef2.current.getBoundingClientRect().x +35 && inputRef.current.getBoundingClientRect().x>cubeRef2.current.getBoundingClientRect().x -35&&
      inputRef.current.getBoundingClientRect().y<cubeRef2.current.getBoundingClientRect().y +35 && inputRef.current.getBoundingClientRect().y>cubeRef2.current.getBoundingClientRect().y -35
      ){
        setCube2(false);
        setCube3(true);
      }
      if (inputRef.current.getBoundingClientRect().x<cubeRef3.current.getBoundingClientRect().x +35 && inputRef.current.getBoundingClientRect().x>cubeRef3.current.getBoundingClientRect().x -35&&
      inputRef.current.getBoundingClientRect().y<cubeRef3.current.getBoundingClientRect().y +35 && inputRef.current.getBoundingClientRect().y>cubeRef3.current.getBoundingClientRect().y -35
      ){
        setCube3(false);
        setCube4(true);
      }
      if (inputRef.current.getBoundingClientRect().x<cubeRef4.current.getBoundingClientRect().x +35 && inputRef.current.getBoundingClientRect().x>cubeRef4.current.getBoundingClientRect().x -35&&
      inputRef.current.getBoundingClientRect().y<cubeRef4.current.getBoundingClientRect().y +35 && inputRef.current.getBoundingClientRect().y>cubeRef4.current.getBoundingClientRect().y -35
      ){
        setCube4(false);
        setCube1(true);
      }     
    }


    useEffect(() => {
      const intervalID =setInterval(()=>{
        snakeHnadeler();
      }, 10)
      return () => {
        clearInterval(intervalID);
      }
    }, [])
    
    
    return (
        <div className='snakeContainer'>
            <motion.div ref={inputRef} className='snake s1' animate='start1' variants={snakeVarient}/>
            <motion.div className='snake s2' animate='start2' variants={snakeVarient}/>
            <motion.div className='snake s3' animate='start3' variants={snakeVarient}/>
            <motion.div className='snake s4' animate='start4' variants={snakeVarient}/>
            <motion.div className='snake s5' animate='start5' variants={snakeVarient}/>
            <CubeStyle ref={cubeRef1} cube={cube1} className='cube c1'><span className='content1'>js</span></CubeStyle>
            <CubeStyle ref={cubeRef2} cube={cube2} className='cube c2'><span className='content2'>html</span></CubeStyle>
            <CubeStyle ref={cubeRef3} cube={cube3} className='cube c3'><span className='content1'>css</span></CubeStyle>
            <CubeStyle ref={cubeRef4} cube={cube4} className='cube c4'><span className='content1'>c#</span></CubeStyle>
        </div>
        
    )
}


const CubeStyle = styled.div`
  opacity:${props=> (props.cube ? '1':'0')}
`

export default Snake;
