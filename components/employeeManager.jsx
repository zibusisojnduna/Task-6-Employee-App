import { useState, useEffect } from "react";
import Add from "./add";
import EmployeeList from "./employeeList";

function EmployeeManager(){
const [ employees, setEmployees] = useState([])
const [ editingId, setEditingId] = useState(null)

useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employess")) || []
    setEmployees(storedEmployees)
}, [])

const saveToLocalStorage = (employees) => {
    localStorage.setItem("employees", JSON.stringify(employees))
}

const handleAddEmployees = (employees) => {
    const newEmployee = {id:Date.now(), ...employees}
    const updatedEmployees = [...employees, newEmployee]
    setEmployees(updatedEmployees)
    saveToLocalStorage(updatedEmployees)
}

const handleDeleteEmployee = (id) => {
    const updatedEmployees = employees.filter(employee => employee.id !==id)
    setEmployees(updatedEmployees)
    saveToLocalStorage(updatedEmployees)
}

const handleEditEmployees = (employee) => {
    setEditingId(employee.id)
}

const handleUpdateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map(employee =>
        employee.id === editingId ? {id: editingId, ...updatedEmployee} : employee
    )

    setEmployees(updatedEmployees)
    saveToLocalStorage(updatedEmployees)
    setEditingId(null)
}

const currentEmployee = employees.find(employee => employee.id === editingId)

return(
    <div>
        <h2>Employee Manager</h2>
        <Add onSubmit={editingId ? handleUpdateEmployee:handleAddEmployees} initialData={currentEmployee}/>
        <h3>Employee List</h3>
        <EmployeeList employees={employees} onEdit={handleEditEmployees} onDelete={handleDeleteEmployee}/>
    </div>
)
}
export default EmployeeManager