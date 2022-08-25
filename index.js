class Employee{

    constructor(id, firstName, lastName, taxId, salary){

        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.taxId = taxId
        this.salary =salary
    }

    monthlySalary(){
        return (this.salary /12).toFixed(2);
    }

    generatePaySlip(){

    return `Employee ID:${this.id} Name: ${this.firstName} ${this.lastName} Tax ID: ${this.taxId} Pay: ${this.monthlySalary()}`
}

}

const Employee1 = new Employee(1, `Udo`, `Müller`, 39990876, 25000);

const Employee2 = new Employee(2, `Sardine`, `Fish`, 1276872, 39098);

const Employee3 = new Employee(3, `Cinderella`, `Shoe`, 32389698, 16040);


console.log(Employee1.generatePaySlip());

console.log(Employee2.generatePaySlip());

console.log(Employee3.generatePaySlip());
console.log("------------------------------------------------------------");
//2.



class Manager extends Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    super(id, firstName, lastName, taxId, salary);

    this.managedEmployees = [];
  }

  addManagedEmployee(employee) {
    this.managedEmployees.push(employee);
  }

  removeManagedEmployee(removeEmp) {
    const idx = this.managedEmployees.findIndex(
      (item) => item.id === removeEmp.id
    );
    return this.managedEmployees.splice(idx, 1);
  }

  
}


const theManager = new Manager(7, "Axel", "Rose", 23278974, 87000);

console.log(theManager.generatePaySlip());

theManager.addManagedEmployee(Employee1);
theManager.addManagedEmployee(Employee2);
theManager.addManagedEmployee(Employee3);

console.log(theManager);

theManager.removeManagedEmployee(Employee1)

console.log(theManager);