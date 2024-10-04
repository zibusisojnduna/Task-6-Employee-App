import { useState, useEffect } from "react"


function Search(){
    const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    // Retrieve employees from local storage
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
    setFilteredEmployees(storedEmployees); // Initialize filtered employees
  }, []);

  useEffect(() => {
    // Filter employees based on search term
    const results = employees.filter(employee => employee.id.includes(searchTerm));
    setFilteredEmployees(results);
  }, [searchTerm, employees]);

  return (
    <div>
      <h2>Employee List</h2>
      <input
        type="text"
        placeholder="Search by Employee ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredEmployees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <ul>
          {filteredEmployees.map((employee) => (
            <li key={employee.id}>
              ID: {employee.id}, Name: {employee.name}, Department: {employee.department}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search