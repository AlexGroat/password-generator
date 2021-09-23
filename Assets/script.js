function generatePassword() {

  var lowerCaseType = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseType = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbersType = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolType = ["(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~", "!", "@", "#", "$", "%", "^", "&", "*",];
  var availableType = [];

  var passwordLength = getPasswordLength();

  var inputTypeSelected = false; 

  while (inputTypeSelected == false) {
    var lowerCase = getChoice("lowercase");
    var upperCase = getChoice("uppercase");
    var numericCharacters = getChoice("numeric");
    var symbolcharacters = getChoice("sym");
    if ((lowerCase) || (upperCase) || (numericCharacters) || (symbolcharacters)) {
      inputTypeSelected = true;
    } else {
      window.alert("Please select one of the criteria.")
    }
  }

   if (lowerCase) {
    availableType = availableType.concat(lowerCaseType);
  }
  if (upperCase) {
    availableType = availableType.concat(upperCaseType);
  }
  if (numericCharacters) {
    availableType = availableType.concat(numbersType);
  }
  if (symbolcharacters) {
    availableType = availableType.concat(symbolType);
  }

  var passwordInputReturn = "";

  for (var i = 0; i < passwordLength; i++) {
    passwordInputReturn += availableType[Math.floor(Math.random() * (availableType.length))];
  }

  return passwordInputReturn;
}

function getPasswordLength() {
  var userInput = 0;
  while ((userInput < 8) || (userInput > 128)) {
    userInput = parseInt(window.prompt("Please enter a password containing at least 8 character and no more than 128 characters: "));

    if (isNaN(userInput)) {



      userInput = 0;
    }
  }

  return userInput;
}

function getChoice(currentOption) {
  var userInput = "a",
    messagePrompt = "";
  var messagePrompt = ('Will you include '.concat(currentOption) + ' characters in your current password (yes/no)?');
  

  while (userInput = "a") {
    userInput = (window.prompt(messagePrompt));
    userInput = userInput.toLowerCase();
    if (userInput == "yes") {
      return true;
    } else if (userInput == "no") {
      return false;
    }
  }
}


// Assignment code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);