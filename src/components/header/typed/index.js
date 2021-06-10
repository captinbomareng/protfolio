import React from 'react'
import TypedComponent from 'react-typed';

function Typed() {
    return (
        <TypedComponent
        className='typed-text'
        strings={["Noc Operator","Noc Shift Manager","Customer Support Manager", "Front-End Developer"]}
        typeSpeed={40}
        backSpeed={50}
        loop
    />
    )
}

export default Typed
