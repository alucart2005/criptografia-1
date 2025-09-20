const secp256k1 = require('../src/secp256k1');

describe('secp256k1 functions', () => {
  let keys;

  beforeAll(() => {
    keys = secp256k1.generateKeys();
  });

  test('generate keys', () => {
    expect(keys.privateKey).toBeDefined();
    expect(keys.publicKey).toBeDefined();
  });

  test('sign and verify', () => {
    const message = 'Hello, secp256k1!';
    const signature = secp256k1.sign(message, keys.privateKey);
    expect(signature).toBeDefined();

    const isValid = secp256k1.verify(signature, message, keys.publicKey);
    expect(isValid).toBe(true);
  });

  test('get address', () => {
    const address = secp256k1.getAddress(keys.publicKey);
    expect(address).toMatch(/^0x[a-fA-F0-9]{40}$/);
  });
});