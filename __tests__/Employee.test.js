
const Employee = require('../lib/Employee.js');

// jest.mock('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Chad', 401, "chad@company.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getRole()).toBe('Employee');
})