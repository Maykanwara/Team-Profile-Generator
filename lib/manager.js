
const Employee = require('./Employee.js') 
    
    class Manager extends Employee {
        constructor(name, id, email, officeNumber,role) {
            super(name, id, email,role);
    
            this.officeNumber = officeNumber;
            this.role = role;
    
        }
        getRole() {
            return 'Manager';
        }
    
        getOfficeNumber() {
            return this.officeNumber;
        }
    }
    module.exports = Manager
    







