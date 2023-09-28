/* Declaration of character types 
Use spread operator (...) to turn any string into an array of single-characters */
let lwrAlphabet = [..."abcdefghijklmnopqrstuvwxyz"];
let upperAlphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let numbers = [..."0123456789"];
//single backslash inserts a (') single quote and double backslash inserts a single backslash
let spclChars = [...'!"\'()*+,-./:;<=>?@[\\]^_`{|}~']; 
let pwLength=0
let userChoices=[]
let result=""

 

function generatePassword (){

  while(pwLength<8 || pwLength>128 || pwLength==="" || isNaN(pwLength)){
    pwLength = prompt("Enter password length between 8 to 128 characters: ");
  }

  var lowerCase = confirm("Do you want lowecase characters?")
  var upperCase = confirm("Do you want uppercase characters? ");
  var numeric = confirm("Do you want numeric characters?");
  var spclCharacters = confirm("Do you want special characters? ");

  if(lowerCase){
    userChoices=userChoices.concat(lwrAlphabet)
  }
  if(upperCase){
    userChoices=userChoices.concat(upperAlphabet)
  }
  if(numeric){
    userChoices=userChoices.concat(numbers)
  }
  if (spclCharacters){
    userChoices= userChoices.concat(spclChars)
  }
  console.log(userChoices);

  if(!lowerCase && !upperCase && !numeric && !spclCharacters){
    alert("You need at least one type of character to generate a password")
    window.location.reload()
  }

  for (let i = 0; i < pwLength; i++) {
   result+= userChoices[Math.floor(Math.random() * userChoices.length)]
    
  }

return result

}



var generateBtn = document.querySelector("#generate")
//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

 //Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



