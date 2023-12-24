const passwordLength = 12;
let password = '';
const smallLetters = 'abcdefghijklmnopqrstuvwxyz'
const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialChar = '~!@#$%^&*()_+{}|:"<>?`-=[]';
const numbers = '1234567890';
const outputBox = document.querySelector('.password-output');

function createPassword () {
  for (let i = 0; i < passwordLength; i += 4 ) {
  password += smallLetters[Math.floor(Math.random() * smallLetters.length)];
  password += capitalLetters[Math.floor(Math.random() * capitalLetters.length)];
  password += specialChar[Math.floor(Math.random() * specialChar.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  }
  outputBox.value = password;
  password = ''; 
};

document.getElementById('generate-button')
  .addEventListener('click',createPassword);

document.getElementById('copy-icon')
  .addEventListener('click',() => {
    outputBox.select();
    document.execCommand('copy');
  })