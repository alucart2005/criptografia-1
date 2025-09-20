const aes = require('../src/aes');
const fs = require('fs');
const path = require('path');

describe('AES functions', () => {
  const testFile = path.join(__dirname, 'test.txt');
  const encryptedFile = path.join(__dirname, 'test.enc');
  const decryptedFile = path.join(__dirname, 'test.dec');
  const key = 'mysecretkey';

  beforeAll(() => {
    fs.writeFileSync(testFile, 'Hello, World!');
  });

  afterAll(() => {
    if (fs.existsSync(testFile)) fs.unlinkSync(testFile);
    if (fs.existsSync(encryptedFile)) fs.unlinkSync(encryptedFile);
    if (fs.existsSync(decryptedFile)) fs.unlinkSync(decryptedFile);
  });

  test('encrypt and decrypt file', () => {
    aes.encryptFile(testFile, key, encryptedFile);
    expect(fs.existsSync(encryptedFile)).toBe(true);

    aes.decryptFile(encryptedFile, key, decryptedFile);
    expect(fs.existsSync(decryptedFile)).toBe(true);

    const original = fs.readFileSync(testFile, 'utf8');
    const decrypted = fs.readFileSync(decryptedFile, 'utf8');
    expect(decrypted).toBe(original);
  });
});