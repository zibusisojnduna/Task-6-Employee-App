import React from "react"
import { useState } from "react"
function Form(){

    const [inputs, setInputs ] = useState({}) 
     
    const handleChange = (event) => {
        const firstName = event.target.firstName
        const lastName = event.target.lastName
        const email = event.target.email
        const number = event.target.number
        const image= event.target.image
        const position = event.target.position
        const id = event.target.id
        setInputs(values =>({...values,[firstName]:lastName, email, number, image, position, id}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Thank you for registering. Your details have been saved.")
    }
    return(
       <></>
    )
}

export default Form