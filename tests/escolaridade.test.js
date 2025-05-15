const { escolaridade } = require('gerador-br');

describe('Escolaridade Generator', () => {
  test('should generate a valid education level', () => {
    const educationLevel = escolaridade();
    expect(typeof educationLevel).toBe('string');
    expect(educationLevel.length).toBeGreaterThan(0);
  });
});
