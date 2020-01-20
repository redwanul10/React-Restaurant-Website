import React from 'react';

const ParalaxSection = ({backgroundImage,Image}) => {
    const background = `url(${backgroundImage}) center center /cover`
    return ( 
        // <!-- PARALAX AREA -->
        <div class="paralax_area" style={{background}}>
            <div class="parax_content">
                <img src={Image} alt=""/>
            </div>
        </div>
    );
}
 
export default ParalaxSection;