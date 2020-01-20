import React from 'react';


const FeatureSection = ({serviceses}) => {
    
    if(!serviceses) return null
    
    return ( 
        // <!-- FEATURE AREA -->
        <div class="feature_area">
            <div class="container">
                <div class="row">
                    {/* <!-- SINGLE FEATURE --> */}
                    {serviceses.map(item=>(
                        <div class="col-md-4">
                            <div class="single_fature">
                                <img src={item.image.url} alt=""/>
                                <div class="details">
                                    <h4>{item.serviceTitle}</h4>
                                    <p>{item.serviceDescription}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default FeatureSection;