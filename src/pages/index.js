import React, {useRef,useEffect} from 'react';
import InfoSection from '../components/infosection';
import  {homeObjOne,card1,card2,card3,card4, card5,} from '../data/Data';
import Cards from '../components/cards'

function Home() {




    return (
        <div  className='pages'>
                <InfoSection {...homeObjOne}/>
                <Cards card1={card1} card2={card2} card3={card3} card4={card4} card5={card5} />
        </div>
    )
}

export default Home
