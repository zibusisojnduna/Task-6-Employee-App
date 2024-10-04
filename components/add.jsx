import { useState, useEffect } from "react";

function Add( onSubmit, initialData){
const [employees, setEmployees] = useState("")
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const [phoneNumber, setPhoneNumber] = useState("")
const [image, setImage] = useState("")
const [position, setPosition] = useState("")
const [id, setId] = useState("")

useEffect(() => {
    if (initialData) {
        setFirstName(initialData.firstName)
        setLastName(initialData.lastName)
        setEmail(initialData.setEmail)
        setPhoneNumber(initialData.setPhoneNumber)
        setImage(initialData.image)
        setPosition(initialData.position)
        setId(initialData.id)
    }else{
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhoneNumber("")
        setImage("")
        setPosition("")
        setId("")
    }
}, [initialData])

const handleSubmit = (e) =>{
    e.preventDefault()
    onSubmit({firstName, lastName, email, phoneNumber, image, position, id})
}

return(
    <form className="form" onSubmit={handleSubmit} style={{padding:"2%"}}>
    <label>First Name</label><br></br>
    <input type="text" placeholder="First Name" className="entry" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input><br></br>

    <label>Surname</label><br></br>
    <input type="text" placeholder="Surname" className="entry" value={lastName} onChange={(e) => setLastName(e.target.value)}></input><br></br>

    <label>Email Address</label><br></br>
    <input type="email" placeholder="Email Address" className="entry" value={email} onChange={(e) => setEmail(e.target.value)}></input><br></br>

    <label>Phone Number</label><br></br>
    <input type="text" placeholder="Phone Number" className="entry" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input><br></br>

    <label>Upload an Image</label><br></br>


    <label>Please Select your Position</label><br></br>
    <select className="entry" value={position} onChange={(e) => setPosition(e.target.value)}>
        <option></option>
        <option>Senior Graphics Programmer</option>
        <option>Junior Gragphics Programmer</option>
        <option>Senior Audio Programmer</option>
        <option>Junior Audio Programmer</option>
        <option>Junior Animator</option>
        <option>Senior Animator</option>
        <option>Tester</option>
    </select><br></br>

    <label>I.D Number</label><br></br>
    <input type="text" placeholder="I.D Number"className="entry" value={id} onChange={(e) => setId(e.target.value)}></input><br></br>
    <br></br>
    <button>{initialData ? "Add Employee " : "Update Employee"}</button>

</form>
)


}export default Add