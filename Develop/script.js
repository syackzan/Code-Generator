// Assignment Code
var generateBtn = document.querySelector("#generate");


var specialCharacters = ["!", "@", "&", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "|", "{", "}", "[", "]"];
var numericalCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


function generatePassword(userInput) {
  
  var userSpecial = confirm("Would you like to add Special Characters?");
  var userNumbers = confirm("Would you like to add numbers?");
  var userUpper = confirm("Would you like to add Uppercase Letters?");
  //confirm("Would you like to add lowercase Letters?");

  var possibleCharacters = [];
  var guaranteedCharacters = [];

  function randomGenerator (userInput, array){
    
    for (var i = 0; i < userInput; i++){
      var index = Math.floor(Math.random() * array.length);
      var call = array[index];
      guaranteedCharacters.push(call);
    }  
    console.log(guaranteedCharacters);
  }

  if (userSpecial === true){
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    console.log(possibleCharacters);
    randomGenerator(userInput, specialCharacters);
  } 

  if (userNumbers == true){
    possibleCharacters = possibleCharacters.concat(numericalCharacters);
    console.log(possibleCharacters);
    randomGenerator(userInput, numericalCharacters);
  }

  if(userUpper === true){
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters)
    console.log(possibleCharacters);
    randomGenerator(userInput, uppercaseCharacters);
  }
  //alert("Password does not match criteria");
  console.log(guaranteedCharacters);
  var passarray = [];

  for (var i = 0; i < (userInput); i++){

    
    var index = Math.floor(Math.random() * possibleCharacters.length);
    var call = possibleCharacters[index];
    
    passarray.push(call);
  }

  var passcontainer = passarray.join("");
  console.log(passcontainer);

  return passcontainer;
  
}

function writePassword(userInput) {
  var password = generatePassword(userInput);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function startCollection(){

  alert("It's Time To Generate A Password");
  var userInput = prompt("Please enter the desired length of your password");

  if (userInput < 8){
    alert("Length of Password must be greater than 8 Characters")
    startCollection();
  } else if (userInput > 129) {
    alert("Length of Password must be less than 129 Characters")
    startCollection();
  } else {
    console.log("hello")
    writePassword(userInput);
  }  
}

// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", startCollection);
