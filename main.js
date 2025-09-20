const { Command } = require('commander');
const hash = require('./src/hash');
const aes = require('./src/aes');
const rsa = require('./src/rsa');
const secp256k1 = require('./src/secp256k1');
const secp256r1 = require('./src/secp256r1');

const program = new Command();

program
  .name('crypto-lib')
  .description('Librería criptográfica CLI')
  .version('1.0.0');

// Hash commands
program
  .command('hash <type> <input>')
  .description('Compute hash of data or file')
  .action((type, input) => {
    if (type === 'sha256') {
      if (input.startsWith('file:')) {
        console.log(hash.sha256File(input.slice(5)));
      } else {
        console.log(hash.sha256(input));
      }
    } else if (type === 'keccak256') {
      if (input.startsWith('file:')) {
        console.log(hash.keccak256File(input.slice(5)));
      } else {
        console.log(hash.keccak256(input));
      }
    }
  });

// AES commands
program
  .command('aes <action> <file> <key> [output]')
  .description('Encrypt or decrypt file with AES')
  .action((action, file, key, output) => {
    const out = output || `${file}.${action === 'encrypt' ? 'enc' : 'dec'}`;
    if (action === 'encrypt') {
      aes.encryptFile(file, key, out);
      console.log(`Encrypted file saved to ${out}`);
    } else if (action === 'decrypt') {
      aes.decryptFile(file, key, out);
      console.log(`Decrypted file saved to ${out}`);
    }
  });

// RSA commands
program
  .command('rsa <action> [args...]')
  .description('RSA operations')
  .action((action, args) => {
    if (action === 'generate') {
      const keys = rsa.generateKeys();
      console.log('Public Key:', keys.publicKey);
      console.log('Private Key:', keys.privateKey);
    } else if (action === 'encrypt') {
      const [data, pubKey] = args;
      console.log(rsa.encrypt(data, pubKey));
    } else if (action === 'decrypt') {
      const [encrypted, privKey] = args;
      console.log(rsa.decrypt(encrypted, privKey));
    }
  });

// secp256k1 commands
program
  .command('secp256k1 <action> [args...]')
  .description('secp256k1 operations')
  .action((action, args) => {
    if (action === 'generate') {
      const keys = secp256k1.generateKeys();
      console.log('Private Key:', keys.privateKey);
      console.log('Public Key:', keys.publicKey);
    } else if (action === 'sign') {
      const [message, privKey] = args;
      console.log(secp256k1.sign(message, privKey));
    } else if (action === 'verify') {
      const [signature, message, pubKey] = args;
      console.log(secp256k1.verify(signature, message, pubKey));
    } else if (action === 'address') {
      const [pubKey] = args;
      console.log(secp256k1.getAddress(pubKey));
    }
  });

// secp256r1 commands
program
  .command('secp256r1 <action> [args...]')
  .description('secp256r1 operations')
  .action((action, args) => {
    if (action === 'generate') {
      const keys = secp256r1.generateKeys();
      console.log('Private Key:', keys.privateKey);
      console.log('Public Key:', keys.publicKey);
    } else if (action === 'sign') {
      const [message, privKey] = args;
      const sig = secp256r1.sign(message, privKey);
      console.log(JSON.stringify(sig));
    } else if (action === 'verify') {
      const [signature, message, pubKey] = args;
      const sig = JSON.parse(signature);
      console.log(secp256r1.verify(sig, message, pubKey));
    }
  });

program.parse();