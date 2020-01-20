import React from 'react';


const FormWrapper = ({heading,children,sectionName,rsv}) => {
    
    return ( 
        // <!-- CONTACT FORM AREA -->
    <div class={`${sectionName} pagePadding`}>
        <div class="container">
            <div class="row">
                <div class={rsv ?"col-md-10 offset-md-1":"col-md-6 offset-md-3"}>
                    <div class="text-center"><h1 class="s_heading small page">{heading}</h1></div>
                    {children}
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default FormWrapper;