function EmployeeList({employees, onEdit, onDelete}){
    return(
        <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.position}
            <button onClick={() => onEdit(employee)}>Edit</button>
            <button onClick={() => onDelete(employee.id)}>Delete</button>
          </li>
        ))}
      </ul>
    )
}
export default EmployeeList