// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword()

// Below are the characters which can be used to generate a random password

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["$", "%", "^", "&" , "@", "!", "/", "+", "-", "(", ")"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var result = [""];
var user = [""];

var numlengthPrompt= prompt ("Between 8 and 128, how long will your password be?");
var numbersPrompt = prompt ("Would you like to include numbers in your password?");
var symbolsPrompt = prompt ("Would you like to include symbols in your password?");
var uppercaselettersPrompt = prompt ("Would you like uppercase letters in your password?");
var lowercaselettersPrompt = prompt ("Would you like lowercase letters in your password?");

if (numbers) {
  result = result.concat(numbers);

}

if (symbols) {
  result = result.concat(symbols);
}

if (uppercaseLetters) {
  result = result.concat(uppercaseLetters);
}

if (lowercaseLetters) {
  result = result.concat(lowercaseLetters);
}

console.log(result)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
