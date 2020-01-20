import React,{useState,useEffect}from 'react';
import SectionHeader from '../SectionHeader'
import FormWrapper   from '../FormWrapper'
import ResvFormInput from '../ResvFormInput'
import Modal from '../Modal'

import {gql} from 'apollo-boost'
import {useQuery,useLazyQuery,useMutation} from '@apollo/react-hooks'
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import moment from 'moment';

// createReservation Mutation
const reservationMutatoin = gql`
mutation ($name:String! $email:String $seat:String! $phone:String 
    $date:String! $time:String! $message:String){
  createReservationOrders(data:{
    name:$name
    email:$email
    seat:$seat
    phone:$phone
    date:$date
    time:$time
    message:$message
    status:PUBLISHED
  }){
    name
  }
}
`
// Query Page Content
const query = gql`
{
    pages(where:{id:"ck5ay4y9pmk4r0869nk8sz70l"}){
        title
        descripton
        backgroundImage{
          url
        }
        formHeading
      }
}
`
// Query Booked Seats
const queryBookedSeats = gql`
query bookedSeats($date:String $time:String){
    reservationOrderses(where:{
        date:$date
        time:$time
    }){
        seat
    }
}
`


const ReservationPage = () => {
    // Init Component State
    const [startDate,setStartDate]  = useState(null)
    const [booked,setBooked]        = useState([])
    const [name,setName]            = useState("")
    const [email,setEmail]          = useState("")
    const [phone,setPhone]          = useState("")
    const [seat,setSeat]            = useState("")
    const [message,setMessage]      = useState("")
    const [time,setTime]            = useState("")
    const [modalExist,setModal]     = useState(false)


    // Graphql Hooks
    const [createReservation] = useMutation(reservationMutatoin,{variables:{name,email,date:startDate,time,seat,message,phone}})
    const {loading,data,error}      = useQuery(query)
    
    const [fetchBookedSeats,bookedSeats] = 
    useLazyQuery(queryBookedSeats,{
        onCompleted:data => setBooked(data.reservationOrderses),
        variables:{date:startDate,time},
        fetchPolicy:"no-cache"
    })
    
    // Call useEffect on time/starDate/modalExist change
    useEffect(()=>{
        if(time && startDate)fetchBookedSeats();
        if(modalExist) setTimeout(()=>{setModal(false)},2000)
    },[time,startDate,modalExist])

    if(loading||error) return null
    const {pages} = data

    // Form Submit Function
    const submit=(event)=>{
        event.preventDefault()
        
        // Check Emty Inputs
        if(!name || !email || !phone || !startDate || !time || !seat)
        return alert("pleaes fill all the input")
        
        // Validate Email
        if( !isEmail(email)) return alert("inValid Email")

        // Validate Phone Number
        if( !isMobilePhone(phone)) return alert("inValid phone number")

        // Create Reservation
        createReservation()
        .then(res=>{
            console.log(res)
           setModal(true)
           setStartDate(null)
           setName("")
           setEmail("")
           setPhone("")
           setSeat("")
           setMessage("")
           setTime("")        
        })
        .catch(err=>console.log(err))
    }

    return ( 
        <>

        {/* Header Content of Contact Page */}
        <SectionHeader
        sectionName="contact_area"
        backgroundImage={pages.backgroundImage.url}
        title={pages.title}
        description={pages.descripton}
        />

        {/* Reservation Form */}
        <FormWrapper
        rsv
        heading="MAKE A RESERVATION"
        sectionName="reservation_form "
        >
        <div className="row">
            <ResvFormInput  value={name}     onChange={e => setName(e.target.value)}     name="name"  type="text"/>
            <ResvFormInput  value={email}    onChange={e => setEmail(e.target.value)}    name="email" type="text"/>
            <ResvFormInput  value={phone}    onChange={e => setPhone(e.target.value)}    name="phone" type="text"/>
            <ResvFormInput  date={startDate} onChange={date => setStartDate(date)}       name="date"/>
            <ResvFormInput  value={time}     onChange={e => setTime(e.target.value)}     name="time"/>
            <ResvFormInput  value={seat}     onChange={e => setSeat(e.target.value)}     name="seat"  booked={booked} validate={{startDate,time}}/>
            <ResvFormInput  value={message}  onChange={e => setMessage(e.target.value)}  name="message"/>
            
            <a onClick={e=>submit(e)}className="Btn">submit</a>
        </div>
        </FormWrapper>

        {/* Modal */}
        <Modal
        reservation
        anim={modalExist ? "fadein":"fadeout"}/>


        </>
    );
}
 
export default ReservationPage;