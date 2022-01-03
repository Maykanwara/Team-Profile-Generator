const Manager = require('../lib/Manager');



test('instantiate manager object', () => {
    const manager = new Manager()

    expect(typeof manager).toBe("object");
  });