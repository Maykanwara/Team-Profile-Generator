const Intern = require('../lib/Intern');



test('instantiate intern object', () => {
    const intern = new Intern()

    expect(typeof intern).toBe("object");
  });

  