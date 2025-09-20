@echo off
echo ========================================
echo Ejemplos de uso de la libreria criptografica
echo ========================================

echo.
echo 1. Generar hash SHA256 de un string:
node main.js hash sha256 "hola mundo"

echo.
echo 2. Generar hash Keccak256 de un string:
node main.js hash keccak256 "mensaje de prueba"

echo.
echo 3. Generar claves RSA:
node main.js rsa generate

echo.
echo 4. Generar claves secp256k1:
node main.js secp256k1 generate

echo.
echo 5. Generar claves secp256r1:
node main.js secp256r1 generate

echo.
echo 6. Encriptar archivo con AES:
echo Creando archivo de prueba...
echo Este es un archivo de prueba para encriptar > test.txt
node main.js aes encrypt test.txt mi_clave_secreta

echo.
echo 7. Desencriptar archivo con AES:
node main.js aes decrypt test.txt.enc mi_clave_secreta

echo.
echo 8. Ver ayuda del CLI:
node main.js --help

echo.
echo ========================================
echo Fin de los ejemplos
echo ========================================
pause