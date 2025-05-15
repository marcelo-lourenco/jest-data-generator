const { apelido } = require('gerador-br');

describe('apelido', () => {
  test('deve gerar um apelido válido', () => {
    const apelidoGerado = apelido();
    expect(apelidoGerado.length).toBeGreaterThan(0);
  });

  test('deve ser uma string', () => {
    expect(typeof apelido()).toBe('string');
  });
});
