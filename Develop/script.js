// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterSet = 
// Write password to the #password input
//add characters into data set, start with 97-122

alert ("Would you like to generate a new password?");


let prompt = ("How many characters long yould you like your password to be?(please select between 8-126)");

function parameters1 (){
return alert ("Would you like this password to include special characters?");
}
function parameters2 (){  
return alert ("Would you like your password to include numbers?");
}
function parameters3 (){
return alert( "would you like you password to include capitals?");
}

parameters()

function lower (){ 
  return (Math.floor (Math.random * 26 ); 
}

function symbol(){
  const symbols = " !@#%^&*()_+" ;

  return 
}

//add to 97 for lower case

var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//create seperate math.randoms for character array. push array with any characters
//selected remeber the character number sheet. want capital? push true value into data array