import React from 'react';


const FormInput = (props) => {
    
    return ( 
        <div class="form_group">
            <label for="">{props.name ? props.name : props.type}</label>
            {
                props.name !== "message" ?<input {...props}/>:
                <textarea {...props} id="" cols="30" rows="10"></textarea>
            }
        </div>
    );
}
 
export default FormInput;