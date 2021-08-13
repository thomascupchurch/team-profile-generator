const Intern = require('../lib/Intern.js');


test('intern name is properly assigned', () => {
    const intern = new Intern('Bert', 987, "bert@company.com", 'Vanderbilt');
    expect(intern.name).toBe('Bert');
});

test('returns a valid id for the intern', () => {
    const intern = new Intern('Bert', 987, "bert@company.com", 'Vanderbilt');
    expect(intern.id).toBe(987);
});

test('returns valid email for the intern', () => {
    const intern = new Intern('Bert', 987, "bert@company.com", 'Vanderbilt');
    expect(intern.email).toBe('bert@company.com');
});

test('returns appropriate school for intern', () => {
    const intern = new Intern('Bert', 987, "bert@company.com", 'Vanderbilt');
    expect(intern.school).toBe('Vanderbilt');
});

test('returns role of intern for intern', () => {
    const intern = new Intern('Bert', 987, "bert@company.com", 'Vanderbilt');
    expect(intern.getRole()).toBe('Intern');
})