const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('James Bond')

    expect(employee.name).toBe('James Bond');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('james.bond@gmail.com');
    expect(employee.role).toBe('Janitor');
    
});

