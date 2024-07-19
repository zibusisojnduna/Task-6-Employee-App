function Employee(){
    return(
        <form id="form-2">
            <h2>Employee Information</h2>

            <label>First Name</label><br></br>
            <input type="text" className="entry"></input><br></br>

            <label>Surname</label><br></br>
            <input type="text" className="entry"></input><br></br>

            <label>Email Address</label><br></br>
            <input type="text" className="entry"></input><br></br>

            <label>Phone Number</label><br></br>
            <input type="text" className="entry"></input><br></br>

            <label>Position</label><br></br>
            <input type="text" className="entry"></input><br></br>

            <lable>I.D Number</lable><br></br>
            <input type="password" className="entry"></input><br></br>

            <button className="edit-confirm">Confirm</button><br></br>

            <button className="btn-delete">Delete</button>
        </form>
    )
}

export default Employee
