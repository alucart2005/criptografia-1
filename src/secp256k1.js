const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const keccak = require('keccak256');

function generateKeys() {
  const keyPair = ec.genKeyPair();
  const privateKey = keyPair.getPrivate('hex');
  const publicKey = keyPair.getPublic('hex');
  return { privateKey, publicKey };
}

function sign(message, privateKey) {
  const key = ec.keyFromPrivate(privateKey);
  const signature = key.sign(message);
  return signature;
}

function verify(signature, message, publicKey) {
  const key = ec.keyFromPublic(publicKey, 'hex');
  return key.verify(message, signature);
}

function getAddress(publicKey) {
  const pubKeyBuffer = Buffer.from(publicKey, 'hex');
  const hash = keccak(pubKeyBuffer.slice(1)); // remove 0x04
  const address = hash.slice(-20);
  return '0x' + address.toString('hex');
}

module.exports = {
  generateKeys,
  sign,
  verify,
  getAddress
};