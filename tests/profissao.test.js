const { profissao } = require('gerador-br');

describe('Profissão Generator', () => {
  test('should generate a valid profession', () => {
    const profession = profissao();
    expect(typeof profession).toBe('string');
    expect(profession.length).toBeGreaterThan(0);
  });
});
