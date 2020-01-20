import React from 'react';
import Article from './Article'


const WineSection = ({image,word,title,description,subTitle}) => {
    
    return ( 
        // <!-- WINE AREA -->
        <div class="wine_area about_area sp">
                <div class="container">
                    <div class="row">
                        {/* <!-- WINE PHOTO --> */}
                        <div class="col-md-6 custom col-sm-12">
                            <img src={image} className="sPhoto" alt=""/>
                        </div>
                            
                        {/* <!-- WINE CONTENT --> */}
                        <div class="col-md-12 col-lg-6">
                            <div class="wine_content about_content text-right">
                                <Article title={title}
                                subTitle={subTitle}
                                word={word}
                                multiDescription={description}
                                />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
 
export default WineSection;