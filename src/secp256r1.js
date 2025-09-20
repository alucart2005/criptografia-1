const EC = require('elliptic');
const ec = new EC.ec('p256');

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

module.exports = {
  generateKeys,
  sign,
  verify
};