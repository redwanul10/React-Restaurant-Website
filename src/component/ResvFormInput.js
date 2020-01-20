import React,{useState} from 'react';
import FormInput from './FormInput'
import ModernDatepicker from 'react-modern-datepicker';

const ResvFormInput = (props) => {

    // Init Component State
    const [times,setTimes] = useState(["09:00","10:00","11:00","12:00","13:00",
                            "14:00","15:00"])
    const [seats,setSeats] = useState([1,2,3,4,5,6,7,8,9])
    
   // return if ResvFormInput is seat
   if(props.name === "seat"){
       const {startDate,time} = props.validate;
       let none ="";
       (!startDate || !time) ? none =  "hidden":none = "visible";
       
       return(
        <div className="col-md-4">
            <div className={`form_group ${none}`}>
                <label for="">{props.name}</label>
                <select {...props} id="seat">
                    <option value="" disabled selected hidden> Select Your Seat</option>
                    {/* Map Seats */}
                    {seats.map(seat=>{
                        const isExist = props.booked.find(bookedSeat=> bookedSeat.seat == seat)
                        // Display Available Seats
                        return isExist ? 
                        <option disabled value={seat}>{seat}</option>:
                        <option value={seat}>{seat}</option>
                        
                    })}
                </select>
            </div>
        </div>
        )
   }

    // return if ResvFormInput is time
    if(props.name === "time"){
        return(
        <div className="col-md-4">
            <div className="form_group">
                <label for="">{props.name}</label>
                <select {...props} id="time">
                    <option value="" disabled selected hidden> Select Time</option>
                    {times.map(time=><option value={time}>{time}</option>)}
                </select>
            </div>
        </div>
        )
        
    }

    // return if ResvFormInput is data
    if(props.name === "date"){
        return (
            <div className="col-md-4">
                <div className="form_group">
                    <label for="">{props.name}</label>
                    <ModernDatepicker 
                    format={'DD-MM-YYYY'} 
                    showBorder        
                    {...props}
                    placeholder={'Select a date'}
                    />
                </div>
            </div>
        )
    }
    return ( 
        <div className={props.name === 'message'?"col-md-12":"col-md-4"}>
            <FormInput {...props}/>
        </div>
    );
}
 
export default ResvFormInput;