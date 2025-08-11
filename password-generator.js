const generatePassword = require('generate-password');

function createPassword() {
  const password = generatePassword.generate({
    length: 10,
    numbers: true,
  });
  console.log('Generated password:', password);
}

createPassword();
