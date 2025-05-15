// Assumindo que 'identidadesGenero' também é exportado por 'gerador-br'
// para manter a lógica original do teste.
const { identidadeGenero, identidadesGenero } = require('gerador-br');

describe('identidadeGenero', () => {
  test('should generate a valid gender identity', () => {
    const identidade = identidadeGenero();
    expect(identidade.length).toBeGreaterThan(0);
  });

  test('should be a string', () => {
    expect(typeof identidadeGenero()).toBe('string');
  });

});
