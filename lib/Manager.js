const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, managerPhone) {

        super(name, id, email);

        this.managerPhone = managerPhone;
    }
    getOfficeNumber() {
        return this.managerPhone;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;