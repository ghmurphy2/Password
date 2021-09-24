// Get references to the #generate element

const lowerCaseLetter = ['a' , 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 'x', 't', 'u', 'v', 'w','x', 'y', 'z']
const upperCaseLetter = ['A' , 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'X', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numberCase = ['1' , '2', '3']
const symbolCase = ['!' , '@', '#']

//add finished later, less clean then code

//length 8-128
function generatePassword(){
  let charArray = []
  let passwordFinal = ""
  let length = parseInt (prompt('How many characters would you like'));
  if(length <8 || length > 128){
    return alert ("Invalid charcter length please try again." )
    //establish length credentials 
  }
  //new comfirm strategy
  //new boolean confirm, dumped alerts
  let shouldContainLower = confirm ('Would you like to include lowercase letters?');
  let shouldContainUpper = confirm ('Would you like to include uppercase letters?');
  let shouldContainNumbers = confirm ('Would you like to include numbers?');
  let shouldContainSymbol = confirm ('Would you like to include symbols?');

  if(shouldContainLower === false && 
    shouldContainUpper === false &&
    shouldContainNumbers === false &&
    shouldContainSymbol === false){
      return alert('Please select one type of character')
      //alert fail

    }
//true case check
    if (shouldContainLower === true){ 
      charArray = charArray.concat(lowerCaseLetter)
    }
    if (shouldContainUpper === true){ 
      charArray = charArray.concat(upperCaseLetter)
    }
    if (shouldContainNumbers === true){ 
      charArray = charArray.concat(numberCase)
    }
    if (shouldContainSymbol === true){ 
      charArray = charArray.concat(symbolCase)
    }
    //new array stucture and dumped push
console.log(charArray)

for (let i=0; i<length ; i++){
  let charIndex = Math.floor(Math.random() * charArray.length); 
  let temp = charArray[charIndex];
  passwordFinal += temp;
  console.log(passwordFinal);
}

return passwordFinal;
}
//using concat instead of combined array options
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
// Write password to the #password input use password final
function writePassword() {
  var password = generatePassword();
 const passwordText = document.getElementById('password')
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);