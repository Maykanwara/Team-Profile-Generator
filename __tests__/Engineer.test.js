const Engineer= require('../lib/Engineer');



test('instantiate engineer object', () => {
    const engineer = new Engineer()

    expect(typeof engineer).toBe("object");
  });

  test('set id on an engineer', () => {
    const Engineer = new Engineer(1)
console.log(engineer)

    expect(engineer.id).toBe(1);
  });