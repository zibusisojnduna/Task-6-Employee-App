function Form(){
    const submit = () => {
        document.getElementById("overlay-1").style.display = "block"
    }

    return(
        <form className="form">
            <label>First Name</label><br></br>
            <input type="text" placeholder="First Name" className="entry"></input><br></br>

            <label>Surname</label><br></br>
            <input type="text" placeholder="Surname" className="entry"></input><br></br>

            <label>Email Address</label><br></br>
            <input type="email" placeholder="Email Address" className="entry"></input><br></br>

            <label>Phone Number</label><br></br>
            <input type="text" placeholder="Phone Number" className="entry"></input><br></br>

            <label>Upload an Image</label><br></br>
            <iframe src=""
frameborder="0" width="10" height="30"></iframe><br></br>

            <label>Please Select your Position</label><br></br>
            <select className="entry">
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
            <input type="text" placeholder="I.D Number"className="entry"></input><br></br>
            <br></br>
            <button onClick={submit} className="submit">Submit</button>

        </form>
    )
}

export default Form