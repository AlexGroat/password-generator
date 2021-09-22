function generatePassword() {
  
  // Each set is in its own individual array, when selected they will be added to the blank array

  var lowerCaseType = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseType = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbersType = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolType = ["(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~", "!", "@", "#", "$", "%", "^", "&", "*",];
  var userInputArray = [];

  var passwordLength = getPasswordLength();

  var inputTypeSelected = false;

  // Loop which ensures the user selects at least one

  while (inputTypeSelected == false) {
    var lowerCase = getChoice("lowercase");
    var upperCase = getChoice("uppercase");
    var numericCharacters = getChoice("numeric");
    var specialCharacters = getChoice("special");
    if ((lowerCase) || (upperCase) || (numericCharacters) || (specialCharacters)) {
      inputTypeSelected = true;
    } else {
      window.alert("Please select one of the criteria.")
    }
  }

  // These if statements determine the user choices and then add them to the user input array.

  if (lowerCase) {
    userInputArray = userInputArray.concat(lowerCaseType);
  }
  if (upperCase) {
    userInputArray = userInputArray.concat(upperCaseType);
  }
  if (numericCharacters) {
    userInputArray = userInputArray.concat(numbersType);
  }
  if (specialCharacters) {
    userInputArray = userInputArray.concat(symbolType);
  }

  var passwordInputReturn = "";

  // This for loop takes random elements, strings them together to create the password.

  for (var i = 0; i < passwordLength; i++) {
    passwordInputReturn += userInputArray[Math.floor(Math.random() * (userInputArray.length))];
  }

  return passwordInputReturn;
}

function getPasswordLength() {
  var userInput = 0;
  while ((userInput < 8) || (userInput > 128)) {
    userInput = parseInt(window.prompt("Please enter a password containing at least 8 character and no more than 128 characters: "));

    // Below i am making sure that the user input is valid and not a letter

    if (isNaN(userInput)) {

      // This will restart the loop if the user inputs criteria which doesn't fit in with the function. eg letters or numbers under 8 or over 128.
      
      userInput = 0;
    }
  }

  return userInput;
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