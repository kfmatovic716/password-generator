/* Declaration of character types 
Use spread operator (...) to turn any string into an array of single-characters */
let lwrAlphabet = [..."abcdefghijklmnopqrstuvwxyz"];
let upperAlphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let numbers = [..."0123456789"];
//single backslash inserts a (') single quote and double backslash inserts a single backslash
let spclChars = [...'!"\'()*+,-./:;<=>?@[\\]^_`{|}~']; 
let pwLength=0;
let userChoices=[];
let result="";
var generateBtn = document.querySelector("#generate")

// event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function that writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// function that generates a password 
function generatePassword (){

  // kicks out all invalid user inputs; function will only execute when user enters a correct input
  while(pwLength<8 || pwLength>128 || pwLength==="" || isNaN(pwLength)){
    pwLength = prompt("Enter password length between 8 to 128 characters: ");
  }

  // user confirms their choice of characters in pw
  var lowerCase = confirm("Do you want lowecase characters?");
  var upperCase = confirm("Do you want uppercase characters? ");
  var numeric = confirm("Do you want numeric characters?");
  var spclCharacters = confirm("Do you want special characters? ");

  /* conditions on which characters need to be concatenated after user confirms choices;
  at least 1 characer type should be selected */
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
  

  // alert when the user did not select at least one character type
  if(!lowerCase && !upperCase && !numeric && !spclCharacters){
    alert("You need at least one type of character to generate a password")
    window.location.reload()
  }

  // generates an array of characters based on user selected password length
  for (let i = 0; i < pwLength; i++) {
   result+= userChoices[Math.floor(Math.random() * userChoices.length)]
    
  }

return result;
}






