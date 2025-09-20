const crypto = require('crypto-js');
const fs = require('fs');

function encryptFile(filePath, key, outputPath) {
  const fileBuffer = fs.readFileSync(filePath, 'utf8');
  const encrypted = crypto.AES.encrypt(fileBuffer, key).toString();
  fs.writeFileSync(outputPath, encrypted);
}

function decryptFile(encryptedFilePath, key, outputPath) {
  const encryptedData = fs.readFileSync(encryptedFilePath, 'utf8');
  const decrypted = crypto.AES.decrypt(encryptedData, key).toString(crypto.enc.Utf8);
  fs.writeFileSync(outputPath, decrypted);
}

module.exports = {
  encryptFile,
  decryptFile
};