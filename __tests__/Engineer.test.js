const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('James Bond', 1, 'james.bond@gmail.com','github.com/jamesBond007');

    expect(engineer.name).toBe('James Bond');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('james.bond@gmail.com');
    expect(engineer.github).toBe('github.com/jamesBond007');
   
    
});


test('gets role of employee', () => {
    const engineer = new Engineer('James Bond', 1, 'james.bond@gmail.com','github.com/jamesBond007');

    expect(engineer.getRole()).toEqual("Engineer");
}); 