import React from 'react';

const Modal = ({anim,reservation,messageIcon}) => {
    // Modal Icon
    const icon = !reservation ? "fa fa-envelope" : "fa fa-check-circle"
    // Title
    const title = !reservation?
                  "Thank You For Your Message":
                  "Reservation Completed"
    return ( 
        <div className={`Modal ${anim}`}>
            <div className="alert_Title">{title}</div>
            <i class={icon} aria-hidden="true"></i>
        </div>
    );
}
 
export default Modal;