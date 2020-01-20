import React from 'react';
import Article from './Article'


const AboutSection = ({image,word,title,button,subTitle,description}) => {
    return ( 
        // <!-- ABOUT AREA -->
        <div class="about_area sp">
            <div class="container">
                <div class="row">
                    {/* <!-- ABOUT CONTENT --> */}
                    <div class="col-md-12 col-lg-6 order">
                        <div class="about_content">
                            <Article title={title}
                            word={word}
                            subTitle={subTitle}
                            description={description}
                            />  
                        </div>
                    </div>
    
                    {/* <!-- ABOUT PHOTO --> */}
                    <div class="col-md-6 custom col-sm-12">
                        <img src={image} className="sPhoto" alt=""/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AboutSection;