// Assumindo que 'orientacoesSexual' também é exportado por '@box4dev/gerador-br'
// para manter a lógica original do teste.
const { orientacaoSexual, orientacoesSexual } = require('@box4dev/gerador-br');

describe('orientacaoSexualRand', () => {
  test('should generate a valid sexual orientation', () => {
    const orientacao = orientacaoSexual();
    expect(orientacao.length).toBeGreaterThan(0);
  });

  test('should be a string', () => {
    expect(typeof orientacaoSexual()).toBe('string');
  });
});
