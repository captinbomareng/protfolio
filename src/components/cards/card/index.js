import React from 'react'
import './index.css'
function index({img,title,place,description}) {
    

    return (
        <div className='game'>
            <div className='rank'>{place}</div>
            <div className='front'>
                <img src={img} className='thumbnail'/>
                <h3 className='name'>{title}</h3>
                <div className='stats'>
                    <p className='viewers'>90%</p>
                    <div className='streamers'>
                        <img src={img} className='image-1'/>
                        <img src={img} className='image-2'/>
                        <img src={img} className='image-3'/>
                    </div>
                </div>
            </div>
            
            <div className='back'>
                <p> {description}  </p>
                
            </div>
            <div className='background'>

            </div>
        </div>
    )
}

export default index
