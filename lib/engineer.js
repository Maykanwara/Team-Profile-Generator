const Engineer = require('./Employee');


class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email)
        this.github = this.github;
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;