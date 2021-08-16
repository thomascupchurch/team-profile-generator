const Manager = require('../lib/Manager.js');

test('manager name is properly assigned', () => {
    const manager = new Manager('Boss', 2, "boss@company.com", '9012615405');
    expect(manager.name).toBe('Boss');
});

test('returns a valid id for the manager', () => {
    const manager = new Manager('Boss', 2, "boss@company.com", '9012615405');
    expect(manager.id).toBe(2);
});

test('returns valid email for the manager', () => {
    const manager = new Manager('Boss', 2, "boss@company.com", '9012615405');
    expect(manager.email).toBe('boss@company.com');
});

test('returns ten digit phone number', () => {
    const manager = new Manager('Boss', 2, "boss@company.com", '9012615405');
    expect(manager.officeNumber).toBe('9012615405');
});

test('returns role of manager for manager', () => {
    const manager = new Manager('Boss', 2, "boss@company.com", '9012615405');
    expect(manager.getRole()).toBe('Manager');
});