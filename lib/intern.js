
const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(id, name, email, school, role) {
        super(id, name, email, role);
        this.school = school;
        this.role=role;
    }
getRole() {
    return this.school;
    }
}

module.exports = Intern;