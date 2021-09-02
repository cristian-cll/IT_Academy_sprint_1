let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];


const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const employee = employees.find(employee => employee.id === id);
            employee ? resolve(employee) : reject("No existe el empleado");
        },2000);
    });
}

const getSalario = (employee) => {
    return new Promise((resolve, reject) => {
        const salary = salaries.find(salary => salary.id === employee.id);
        salary ? resolve(salary) : reject("No existe el salario");
    });
}

module.exports = {getEmpleado, getSalario};