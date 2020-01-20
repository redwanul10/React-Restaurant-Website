import React from 'react';

const Widget = ({widget}) => {
    const description =  widget.description.split('\n').map(item=><p>{item}</p>);
    return ( 
        <div class="col-md-4">
            <div class="footer_content">
                <h4>{widget.name}</h4>
                {description}
            </div>
        </div>
    );
}
 
export default Widget;