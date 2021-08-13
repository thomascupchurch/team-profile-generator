const Engineer = require('../lib/Engineer.js');

// jest.mock('../lib/Employee.js');

test('creates engineer object', () => {
    const engineer = new Engineer('Chad', 401, "chad@company.com", 'chad.coder');

    
    expect(engineer.id).toBe(401);
    expect(engineer.email).toBe('chad@company.com');
    expect(engineer.github).toBe('chad.coder');
    expect(engineer.getRole()).toBe('Engineer');
})

test('engineer name is properly assigned', () => {
    const engineer = new Engineer('Chad', 401, "chad@company.com", 'chad.coder');
    expect(engineer.name).toBe('Chad');
})