const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('James Bond', 1, 'james.bond@gmail.com');

    expect(employee.name).toBe('James Bond');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('james.bond@gmail.com');
   
    
});

test('gets employee name', () => {
    const employee = new Employee('James Bond');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
}); 

test('gets employee id', () => {
    const employee = new Employee('James Bond');

    expect(employee.getId()).toHaveProperty('id');
}); 

test('gets employee email', () => {
    const employee = new Employee('James Bond');

    expect(employee.getEmail()).toHaveProperty('email');
}); 

test('gets employee role', () => {
    const employee = new Employee('James Bond');

    expect(employee.getRole()).toBeTruthy();
}); 


