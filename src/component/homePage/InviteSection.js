import React from 'react';
import Article from './Article'


const InviteSection = ({word,description,title,backgroundImage}) => {
    const background = `url(${backgroundImage}) center center /cover`
    return ( 
        // <!-- INVITE AREA -->
        <div class="invite_area" style={{background}}>
            <div class="parax_content about_content">
                <Article title={title}
                whiteTitle
                word={word}
                description={description}
                />                
            </div>
        </div>
    );
}
 
export default InviteSection;