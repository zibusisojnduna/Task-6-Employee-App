function Edit(){
    return(
        <form className="form">
        <label>First Name</label><br></br>
        <input type="text" placeholder="" className="entry"></input><br></br>

        <label>Surname</label><br></br>
        <input type="text" placeholder="Surname" className="entry"></input><br></br>

        <label>Email Address</label><br></br>
        <input type="email" placeholder="" className="entry"></input><br></br>

        <label>Phone Number</label><br></br>
        <input type="text" placeholder="" className="entry"></input><br></br>

        <label>Upload an Image</label><br></br>
        <iframe src=""
frameborder="0" width="10" height="30"></iframe><br></br>

        <label>Please Select your Position</label><br></br>
        <select className="entry">
            
        </select><br></br>

        <label>I.D Number</label><br></br>
        <input type="text" placeholder=""className="entry"></input><br></br>
        <br></br>
        <button className="submit">Update</button>

    </form>
    )
}

export default Edit