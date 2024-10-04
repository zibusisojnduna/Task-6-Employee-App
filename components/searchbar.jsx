import { useState, useEffect } from "react"


function Search(){
  const [searchTerm, setSearchTerm] = useState("")
  const [employees, setEmployees] = useState([])
  const [filteredEmployees, setFilteredEmployees] = useState([])

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || []
  }, [])

  useEffect(() => {
    if(searchTerm) {
        const results = employees.filter(employee => 
            employee.id.includes(searchTerm)
        )
        setFilteredEmployees(results)
    }else {
        setFilteredEmployees(employees)
    }
  }, [searchTerm, employees])
    return(
        <div>
            <input type="text" placeholder="Search by ID" value={searchTerm} onChange={ e =>setSearchTerm(e.target.value)}></input>

            <ul>
                {filteredEmployees.map(employee => (
                    <li key={employee.id}>
                        {employee.id}:{employee.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Search