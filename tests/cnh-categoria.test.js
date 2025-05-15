
const { cnhCategoria } = require('gerador-br');

describe('cnhCategoria', () => {
  test('should generate a valid driver\'s license category', () => {
    const categoria = cnhCategoria();
    expect(categoria.length).toBeGreaterThan(0);
  });
  test('should be a string', () => {
    expect(typeof cnhCategoria()).toBe('string');
  });
});