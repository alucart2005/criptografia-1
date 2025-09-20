const hash = require('../src/hash');
const fs = require('fs');
const path = require('path');

describe('Hash functions', () => {
  test('sha256 string', () => {
    const result = hash.sha256('hello');
    expect(result).toBe('2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824');
  });

  test('keccak256 string', () => {
    const result = hash.keccak256('hello');
    expect(result).toBe('1c8aff950685c2ed4bc3174f3472287b56d9517b9c948127319a09a7a36deac8');
  });

  test('sha256 file', () => {
    const testFile = path.join(__dirname, 'test.txt');
    fs.writeFileSync(testFile, 'hello');
    const result = hash.sha256File(testFile);
    expect(result).toBe('2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824');
    fs.unlinkSync(testFile);
  });

  test('keccak256 file', () => {
    const testFile = path.join(__dirname, 'test.txt');
    fs.writeFileSync(testFile, 'hello');
    const result = hash.keccak256File(testFile);
    expect(result).toBe('1c8aff950685c2ed4bc3174f3472287b56d9517b9c948127319a09a7a36deac8');
    fs.unlinkSync(testFile);
  });
});