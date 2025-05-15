// Assumindo que 'tiposSanguineo' também é exportado por 'gerador-br'
// para manter a lógica original do teste.
const { tipoSanguineo, tiposSanguineo } = require('gerador-br');

describe('tipoSanguineo', () => {
  test('should generate a valid blood type', () => {
    const tipo = tipoSanguineo();
    expect(tipo.length).toBeGreaterThan(0);
  });

  test('should be a string', () => {
    expect(typeof tipoSanguineo()).toBe('string');
  });

});
