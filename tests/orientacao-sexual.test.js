// Assumindo que 'orientacoesSexual' também é exportado por 'gerador-br'
// para manter a lógica original do teste.
const { orientacaoSexual, orientacoesSexual } = require('gerador-br');

describe('orientacaoSexualRand', () => {
  test('should generate a valid sexual orientation', () => {
    const orientacao = orientacaoSexual();
    expect(orientacao.length).toBeGreaterThan(0);
  });

  test('should be a string', () => {
    expect(typeof orientacaoSexual()).toBe('string');
  });
});
