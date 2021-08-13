const Engineer = require('../lib/Engineer.js');

test('engineer name is properly assigned', () => {
    const engineer = new Engineer('Chad', 401, "chad@company.com", 'chad.coder');
    expect(engineer.name).toBe('Chad');
});

test('returns a valid id for the engineer', () => {
    const engineer = new Engineer('Chad', 401, "chad@company.com", 'chad.coder');
    expect(engineer.id).toBe(401);
});

test('returns valid email for the engineer', () => {
    const engineer = new Engineer('Chad', 401, "chad@company.com", 'chad.coder');
    expect(engineer.email).toBe('chad@company.com');
});

test('returns appropriate github username for engineer', () => {
    const engineer = new Engineer('Chad', 401, "chad@company.com", 'chad.coder');
    expect(engineer.github).toBe('chad.coder');
});

test('returns role of engineer for engineer', () => {
    const engineer = new Engineer('Chad', 401, "chad@company.com", 'chad.coder');
    expect(engineer.getRole()).toBe('Engineer');
});