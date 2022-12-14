const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('James Bond', 1, 'james.bond@gmail.com',1);

    expect(manager.name).toBe('James Bond');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('james.bond@gmail.com');
    expect(manager.office).toEqual(expect.any(Number));
   
    
});

test('gets role of employee', () => {
    const manager = new Manager('James Bond', 1, 'james.bond@gmail.com',1);

    expect(manager.getRole()).toEqual("Manager");
}); 
