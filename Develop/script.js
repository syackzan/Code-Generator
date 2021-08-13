// Assignment Code
var generateBtn = document.querySelector("#generate");


var specialCharacters = ["!", "@", "&", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "|", "{", "}", "[", "]"];
var numericalCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


function generatePassword(userInput) {
  
  var passarray = [];

  for (var i = 0; i < (userInput); i++){

    
    var index = Math.floor(Math.random() * specialCharacters.length);
    var call = specialCharacters[index];
    
    passarray.push(call);
    console.log(passarray[i])
 
  }

  var passcontainer = passarray.join("");
  console.log(passcontainer);

  return passcontainer;
}

function writePassword() {
  startCollection ();
  var password = generatePassword();
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
    generatePassword(userInput);
  }  
}

// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
