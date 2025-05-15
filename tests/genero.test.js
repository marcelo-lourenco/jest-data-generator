const { genero } = require('gerador-br');

describe('Genero Generator', () => {
  test('should return "Feminino" for input "f"', () => {
    expect(genero('f')).toBe('Feminino');
  });

  test('should return "Feminino" for input "F"', () => {
    expect(genero('F')).toBe('Feminino');
  });

  test('should return "Masculino" for input "m"', () => {
    expect(genero('m')).toBe('Masculino');
  });

  test('should return "Masculino" for input "M"', () => {
    expect(genero('M')).toBe('Masculino');
  });

  test('should return "Intersexo" for input "i"', () => {
    expect(genero('i')).toBe('Intersexo');
  });

  test('should return "Intersexo" for input "I"', () => {
    expect(genero('I')).toBe('Intersexo');
  });

  const randomOutputs = ['Feminino', 'Masculino'];

  test('should return "Feminino" or "Masculino" for null input', () => {
    expect(randomOutputs).toContain(genero(null));
  });

  test('should return "Feminino" or "Masculino" for undefined input', () => {
    expect(randomOutputs).toContain(genero(undefined));
  });

  test('should return "Feminino" or "Masculino" for no input', () => {
    expect(randomOutputs).toContain(genero());
  });

  test('should return "Feminino" or "Masculino" for invalid string input "x"', () => {
    expect(randomOutputs).toContain(genero('x'));
  });

  test('should return "Feminino" or "Masculino" for invalid numeric input 123', () => {
    expect(randomOutputs).toContain(genero(123));
  });
});
