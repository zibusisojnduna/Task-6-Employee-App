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
        <form className="form" onSubmit={handleSubmit}>
            <label>First Name</label><br></br>
            <input type="text" placeholder="First Name" className="entry" value={inputs.firstName} onChange={handleChange}></input><br></br>

            <label>Surname</label><br></br>
            <input type="text" placeholder="Surname" className="entry" value={inputs.lastName} onChange={handleChange}></input><br></br>

            <label>Email Address</label><br></br>
            <input type="email" placeholder="Email Address" className="entry" value={inputs.email} onChange={handleChange}></input><br></br>

            <label>Phone Number</label><br></br>
            <input type="text" placeholder="Phone Number" className="entry" value={inputs.number} onChange={handleChange}></input><br></br>

            <label>Upload an Image</label><br></br>
      <br></br>

            <label>Please Select your Position</label><br></br>
            <select className="entry" value={inputs.position} onChange={handleChange}>
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
            <input type="text" placeholder="I.D Number"className="entry" value={inputs.id} onChange={handleChange}></input><br></br>
            <br></br>
            <button onClick={submit} className="submit">Submit</button>

        </form>
    )
}

export default Form