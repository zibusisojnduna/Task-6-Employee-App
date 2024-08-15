function Employee(props){
    const confirm = () =>{
        document.getElementById("form-2").style.display = "none"
    }

    const remove = () => {
        alert("Are you sure?")

    }


    return(
        <form id="form-2">
            <h2>Employee Information</h2>

            <img src="">{props.image}</img>

            <label>First Name</label><br></br>
            <input type="text" className="entry" id="firstname">{props.firstname}</input><br></br>

            <label>Surname</label><br></br>
            <input type="text" className="entry" id="lastname">{props.lastname}</input><br></br>

            <label>Email Address</label><br></br>
            <input type="text" className="entry" id="email">{props.email}</input><br></br>

            <label>Phone Number</label><br></br>
            <input type="text" className="entry" id="number">{props.number}</input><br></br>

            <label>Position</label><br></br>
            <input type="text" className="entry" id="position">{props.position}</input><br></br>

            <lable>I.D Number</lable><br></br>
            <input type="password" className="entry" id="id">{props.id}</input><br></br>

            <button className="edit-confirm" onClick={confirm}>Confirm</button><br></br>

            <button className="btn-delete" onClick={remove}>Delete</button>
        </form>
    )
}

export default Employee
