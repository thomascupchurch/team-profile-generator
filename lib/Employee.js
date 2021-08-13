

class Employee{
    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    }
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };
    
    getEmail() {
        return this.email;
    };
    
    getRole() {
        return this.constructor.name;
        
    };
    
}

const newGuy = new Employee('Greg', 14, 'gregemail');
console.log(newGuy.getRole());

module.exports = Employee;


