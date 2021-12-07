
const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
    }
getRole() {
    return this.school;
    }
}

module.exports = Intern;