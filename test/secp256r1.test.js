const secp256r1 = require('../src/secp256r1');

describe('secp256r1 functions', () => {
  let keys;

  beforeAll(() => {
    keys = secp256r1.generateKeys();
  });

  test('generate keys', () => {
    expect(keys.privateKey).toBeDefined();
    expect(keys.publicKey).toBeDefined();
  });

  test('sign and verify', () => {
    const message = 'Hello, secp256r1!';
    const signature = secp256r1.sign(message, keys.privateKey);
    expect(signature).toBeDefined();

    const isValid = secp256r1.verify(signature, message, keys.publicKey);
    expect(isValid).toBe(true);
  });
});