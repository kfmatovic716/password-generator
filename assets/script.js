// Assignment Code
var alphabet = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
//single backslash inserts a (') single quote and double backslash inserts a single backslash
let spclChars = '!"\'()*+,-./:;<=>?@[\\]^_`{|}~'; 

var chars = alphabet.concat(numbers).concat(spclChars)
console.log(chars)

let pwCriteria = prompt("Enter password criteria? ")
let pwLength = prompt("Enter passwordLength: ");
let charTypes = prompt("Enter type of characters: ")


/*
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/