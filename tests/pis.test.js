const { pis } = require('gerador-br');

describe('PIS Generator', () => {
  test('should generate a valid PIS without mask', () => {
    const pisWithoutMask = pis(false);
    expect(pisWithoutMask.length).toBe(11); // 11 digits
    expect(pisWithoutMask.match(/\d/g).length).toBe(11); // 11 digits
  });

  test('should generate a valid PIS with mask', () => {
    const pisWithMask = pis(true);
    expect(pisWithMask.length).toBe(14); // 11 digits + 3 separators
    expect(pisWithMask.match(/\d/g).length).toBe(11); // 11 digits
    expect(pisWithMask.match(/\./g).length).toBe(3); // 3 dots
  });
});
