const { cnh } = require('@box4dev/gerador-br');

describe('CNH Generator', () => {
  test('should generate a valid CNH', () => {
    const generatedCNH = cnh();
    expect(generatedCNH.length).toBe(11); // 11 digits
    expect(generatedCNH.match(/\d/g).length).toBe(11); // 11 digits
  });
});
