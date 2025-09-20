## Mis primeros pasos en Web3 😁

# Librería Criptográfica en JavaScript

Esta librería proporciona implementaciones de algoritmos criptográficos comunes en JavaScript, incluyendo hashes, encriptación AES, RSA, y curvas elípticas secp256k1 y secp256r1.

## Características

- **Hashes**: SHA256, Keccak256 (con soporte para archivos)
- **AES**: Encriptación y desencriptación de archivos
- **RSA**: Generación de claves, encriptación y desencriptación
- **secp256k1**: Generación de claves, firma, verificación, y cálculo de address Ethereum
- **secp256r1**: Generación de claves, firma y verificación

## Instalación

```bash
npm install
```

## Uso

### Script de Ejemplos

Para ejecutar ejemplos interactivos de la librería, tienes dos opciones:

#### Opción 1: Usando npm (recomendado)
```bash
npm run examples
```

#### Opción 2: Ejecutando directamente
```bash
examples.bat
```

Este script ejecutará varios ejemplos de uso de la librería, incluyendo:
- Generación de hashes SHA256 y Keccak256
- Generación de claves RSA, secp256k1 y secp256r1
- Encriptación y desencriptación AES de archivos
- Ayuda del CLI

### CLI

La librería incluye un CLI para uso directo desde la línea de comandos.

#### Hashes

```bash
# Hash de string
node main.js hash sha256 "hello"

# Hash de archivo
node main.js hash sha256 file:path/to/file.txt
```

#### AES

```bash
# Encriptar archivo
node main.js aes encrypt path/to/file.txt mykey

# Desencriptar archivo
node main.js aes decrypt path/to/file.enc mykey
```

#### RSA

```bash
# Generar claves
node main.js rsa generate

# Encriptar
node main.js rsa encrypt "data" "public_key"

# Desencriptar
node main.js rsa decrypt "encrypted_data" "private_key"
```

#### secp256k1

```bash
# Generar claves
node main.js secp256k1 generate

# Firmar
node main.js secp256k1 sign "message" "private_key"

# Verificar
node main.js secp256k1 verify "signature" "message" "public_key"

# Obtener address Ethereum
node main.js secp256k1 address "public_key"
```

#### secp256r1

```bash
# Generar claves
node main.js secp256r1 generate

# Firmar
node main.js secp256r1 sign "message" "private_key"

# Verificar
node main.js secp256r1 verify "signature_json" "message" "public_key"
```

### Uso Programático

```javascript
const hash = require('./src/hash');
console.log(hash.sha256('hello'));

const aes = require('./src/aes');
aes.encryptFile('input.txt', 'key', 'output.enc');

const rsa = require('./src/rsa');
const keys = rsa.generateKeys();
const encrypted = rsa.encrypt('data', keys.publicKey);
const decrypted = rsa.decrypt(encrypted, keys.privateKey);

const secp256k1 = require('./src/secp256k1');
const keys2 = secp256k1.generateKeys();
const signature = secp256k1.sign('message', keys2.privateKey);
const isValid = secp256k1.verify(signature, 'message', keys2.publicKey);
const address = secp256k1.getAddress(keys2.publicKey);

const secp256r1 = require('./src/secp256r1');
const keys3 = secp256r1.generateKeys();
const sig = secp256r1.sign('message', keys3.privateKey);
const valid = secp256r1.verify(sig, 'message', keys3.publicKey);
```

## Scripts Disponibles

La librería incluye varios scripts npm para facilitar su uso:

```bash
npm test              # Ejecutar todos los tests
npm run examples      # Ejecutar ejemplos interactivos
```

## Tests

Ejecutar los tests con:

```bash
npm test
```

## Dependencias

- crypto-js
- keccak256
- elliptic
- @noble/secp256k1
- commander
- jest

## Licencia

ISC
