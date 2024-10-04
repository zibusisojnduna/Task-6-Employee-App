import { useEffect, useState } from "react";

function AddEmployee({currentEmployee, onSave}){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [position, setPosition] = useState("")
    const [id, setId] = useState("")

    useEffect(() => {
        if (currentEmployee) {
            setFirstName(currentEmployee.firstName)
            setLastName(currentEmployee.lastName)
            setEmail(currentEmployee.email)
            setPhoneNumber(currentEmployee.phoneNumber)
            setPosition(currentEmployee.position)
            setId(currentEmployee.id)
        }else {
            setFirstName("")
            setLastName("")
            setEmail("")
            setPhoneNumber("")
            setPosition("")
            setId("")
        }
    }, [currentEmployee])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!firstName || !lastName || !email || !phoneNumber || !position || !id) {
            alert("All fields are required!");
            return;
    }
    const employeeData = {firstName, lastName, email, phoneNumber, position, id}
    onSave(employeeData)
    
}
return(
    <form onSubmit={handleSubmit}>
        <h2>Add Employee</h2>
        <div>
            <label>First Name</label><br></br>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input><br></br>

            <lable>Last Name</lable><br></br>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}></input><br></br>

            <label>Email Address</label><br></br>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input><br></br>

            <label>Phone Number</label><br></br>
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input><br></br>

            <label>Position</label><br></br>
            <input type="text" value={position} onChange={(e) => setPosition(e.target.value)}></input><br></br>

            <label>ID Number</label><br></br>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)}></input><br></br>
        </div>

        <button>{currentEmployee ? "Update Employee" : "Add Employee"}</button>
    </form>
)
}
export default AddEmployee