// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

alert ("Would you like to generate a new password?");


let prompt ("How many characters long yould you like your password to be?(please select between 8-126)");

function parameters (){
alert ("Would you like this password to include special characters?");
alert ("Would you like your password to include numbers?");
alert( "would you like you password to include capitals?")
}


parameters


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
