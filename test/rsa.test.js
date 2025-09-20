const rsa = require('../src/rsa');

describe('RSA functions', () => {
  let keys;

  beforeAll(() => {
    keys = rsa.generateKeys();
  });

  test('generate keys', () => {
    expect(keys.publicKey).toBeDefined();
    expect(keys.privateKey).toBeDefined();
  });

  test('encrypt and decrypt', () => {
    const data = 'Hello, RSA!';
    const encrypted = rsa.encrypt(data, keys.publicKey);
    expect(encrypted).toBeDefined();

    const decrypted = rsa.decrypt(encrypted, keys.privateKey);
    expect(decrypted).toBe(data);
  });
});