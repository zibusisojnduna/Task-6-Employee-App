import { useEffect, useState } from "react";

function ReadEmployee(){
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem("employees")) || []
        setEmployees(storedEmployees)
    }, [])

    return(
        <div>
            <h2>Employee List</h2>
            {employees.length === 0 ? (
                <p>No employees found</p>
            ): (
                <ul>
                    {employees.map((employee) => {
                        <li key={employee.id}>
                            First Name:{employee.firstName}, Last Name:{employee.lastName}, Email Address:{employee.email}, Phone Number:{employee.phoneNumber}, Position:{employee.position}, I.D Number:{employee.id}
                        </li>
                    })}
                </ul>
            )}
        </div>
    )
}

export default ReadEmployee