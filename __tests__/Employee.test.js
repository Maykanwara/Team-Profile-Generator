const Employee = require('../lib/Employee');



test('instantiate employee object', () => {
    const employee = new Employee()

    expect(typeof employee).toBe("object");
  });

  test('set id on an employee', () => {
    const employee = new Employee(1)
console.log(employee)

    expect(employee.id).toBe(1);
  });