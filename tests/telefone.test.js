const { telefone } = require('gerador-br');

describe('telefone', () => {
  test('Generates a random phone number without mask', () => {
    const result = telefone();
    expect(result.length).toBe(10); // 8 digits + 2 digits DDD
    expect(/^\d{10}$/.test(result)).toBe(true); // Check if it only contains digits
  });

  test('Generates a random phone number with mask', () => {
    const result = telefone(true);
    expect(result.length).toBe(14); // (DDD) XXXX-XXXX
    expect(/^\(\d{2}\) \d{4}-\d{4}$/.test(result)).toBe(true); // Check the format
  });

  test('Generates a phone number for a specific state without mask', () => {
    const state = 'PB';
    const result = telefone(false, state);
    expect(result.startsWith('83')).toBe(true); // Check if DDD corresponds to "PB"
    expect(result.length).toBe(10);
  });

  test('Generates a phone number for a specific state with mask', () => {
    const state = 'RN';
    const result = telefone(true, state);
    expect(result.startsWith('(84)')).toBe(true); // Check if DDD corresponds to "RN"
    expect(result.length).toBe(14);
  });
});
