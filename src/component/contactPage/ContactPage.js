import React,{useState,useEffect} from 'react';
import {gql} from 'apollo-boost'
import {useQuery,useMutation} from '@apollo/react-hooks'
import isEmail from 'validator/lib/isEmail';

import Modal from '../Modal'
import SectionHeader from '../SectionHeader'
import FormWrapper from '../FormWrapper'
import FormInput from '../FormInput'

// sendMessage Mutation
const sendMessageMutation = gql`
mutation ($name:String! $email:String! $subject:String! $message:String! ){
    createContactForm(data:{
    name:$name
    email:$email
    subject:$subject
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
    pages(where:{id:"ck5ay18wamjtc0869uc91v5na"}){
        title
        descripton
        backgroundImage{
          url
        }
        formHeading
    }
}
`


const Contact = () => {

    // Init Component State
    const [name,setName]        = useState("")
    const [email,setEmail]      = useState("")
    const [subject,setSubject]  = useState("")
    const [message,setMessage]  = useState("")
    const [modalExist,setModal] = useState(false)

    // useEffect Function
    useEffect(()=>{
        if(modalExist) setTimeout(()=>setModal(false),2000)
    },[modalExist])

    // Graphql Hooks for Query and Mutation
    const {loading,data,error} = useQuery(query)
    const [sendMessage] = useMutation(sendMessageMutation)

    // Form Submit Function
    const submit = (event)=> {
        event.preventDefault()
        // Check Emty Inputs
        if(!name || !email || !subject || !message)
        return alert("pleaes fill all the input")

        // Validate Email
        if( !isEmail(email)) return alert("inValid Email")
        sendMessage({variables:{name,email,subject,message}})
        .then(res=>{
            console.log(res)
            setModal(true)
            setName("")
            setEmail("")
            setSubject("")
            setMessage("")
        })
        .catch(err=>console.log(err))
    }
    
    if(loading||error||!data) return null
    console.log(data)
    const {pages} = data;
    console.log(pages.descripton)

    return ( 
        <>
        {/* Header Content of Contact Page */}
        <SectionHeader
        sectionName="contact_area"
        backgroundImage={pages.backgroundImage.url}
        title={pages.title}
        description={pages.descripton}
        />
        
        {/* Contact Us Form */}
        <FormWrapper 
        sectionName="contact_us_area "
        heading={pages.formHeading}>
            {/* Form Inputs */}
            <FormInput name="name"    onChange={e=>setName(e.target.value)}     value={name}    type="text"/>
            <FormInput name="email"   onChange={e=>setEmail(e.target.value)}    value={email}   type="email"/>
            <FormInput name="subject" onChange={e=>setSubject(e.target.value)}  value={subject} type="text"/>
            <FormInput name="message" onChange={e=>setMessage(e.target.value)}  value={message} type="text"/>
            <a href="" onClick={e=>submit(e)} className="Btn">SEND MESSAGE</a>
        </FormWrapper>

        {/* Modal */}
        <Modal
        anim={modalExist ? "fadein":"fadeout"}
        />

        </>
     );
}
 
export default Contact;