const crypto = require('crypto-js');
const keccak = require('keccak256');
const fs = require('fs');

function sha256(data) {
  return crypto.SHA256(data).toString();
}

function sha256File(filePath) {
  const fileData = fs.readFileSync(filePath, 'utf8');
  return crypto.SHA256(fileData).toString();
}

function keccak256(data) {
  return keccak(data).toString('hex');
}

function keccak256File(filePath) {
  const fileData = fs.readFileSync(filePath, 'utf8');
  return keccak(fileData).toString('hex');
}

module.exports = {
  sha256,
  sha256File,
  keccak256,
  keccak256File
};