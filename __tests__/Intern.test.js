const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern('James Bond', 1, 'james.bond@gmail.com','college');

    expect(intern.name).toBe('James Bond');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('james.bond@gmail.com');
    expect(intern.school).toBe('college');
   
    
});

test('gets role of employee', () => {
    const intern = new Intern('James Bond', 1, 'james.bond@gmail.com',1);

    expect(intern.getRole()).toEqual("Intern");
});