// Assumindo que 'provedoresEmail' também é exportado por '@box4dev/gerador-br'
// para manter a lógica original do teste.
const { provedorEmail, provedoresEmail } = require('@box4dev/gerador-br');

describe('provedorEmailRand', () => {
  test('should generate a valid email provider', () => {
    const provedor = provedorEmail();
    expect(provedor.length).toBeGreaterThan(0);
  });

  test('should be a string', () => {
    expect(typeof provedorEmail()).toBe('string');
  });

});
