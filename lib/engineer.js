
const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(id, name, email, github, role) {
        super(id, name, email, role)
        this.github = github;
        this.role = role;
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;