import AddEmployee from "./addEmployee";
import EmployeeList from "./employeeList";



function ManageEmployees(){
    const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    // Load employees from local storage
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem('employees', JSON.stringify(data));
  };

  const addOrUpdateEmployee = (employeeData) => {
    if (currentEmployee) {
      const updatedEmployees = employees.map(employee =>
        employee.id === currentEmployee.id ? employeeData : employee
      );
      setEmployees(updatedEmployees);
      setCurrentEmployee(null); // Clear current employee
      saveToLocalStorage(updatedEmployees);
    } else {
      const newEmployee = { id: employeeData.id, name: employeeData.name, department: employeeData.department };
      setEmployees([...employees, newEmployee]);
      saveToLocalStorage([...employees, newEmployee]);
    }
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter(employee => employee.id !== id);
    setEmployees(updatedEmployees);
    saveToLocalStorage(updatedEmployees);
  };

  return (
    <div>
      <h1>Employee Management</h1>
      <AddEmployee currentEmployee={currentEmployee} onSave={addOrUpdateEmployee} />
      <EmployeeList onEdit={setCurrentEmployee} onDelete={deleteEmployee} />
    </div>
  );
}