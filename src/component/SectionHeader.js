import React from 'react';

const SectionHeader = ({sectionName,backgroundImage,title,description}) => {
    const background = `url(${backgroundImage}) center center /cover`
    return ( 
        // <!-- Header Content of Pages  -->
        <div class={sectionName}>
            <div class="content" style={{background}}>
                <div class="content_details">
                    <h1 >{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}
 
export default SectionHeader;