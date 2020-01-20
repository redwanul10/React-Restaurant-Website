import React from 'react';
import { Link } from 'react-router-dom';
import Article from './Article'

const OpenHoursSection = ({backgroundImage,word,title,button,openHours}) => {
    
    // Split Text Via Line Breaks
    const hoursText = openHours.split('\n').map(item=><p>{item}</p>)
    const background = `url(${backgroundImage}) center center /cover`
    return ( 
        // <!-- OPEN OURS AREA -->
        <div class="open_ours" style={{background}}>
            <div class="parax_content about_content">
                <Article title={title}
                whiteTitle
                word={word}
                btnText={button}
                to="/reservation"
                btnWhite
                multiDescription={openHours}
                />                
            </div>
        </div>
     );
}
 
export default OpenHoursSection;