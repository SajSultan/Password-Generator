// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let numberOfChars;
let randomArray = [];
let userChoiceArr = [];

let lowerConfirm;
let upperConfirm;
let specialConfirm;
let numericConfirm;
 
// 1. Prompt user for password character length
passwordCharLength = (prompt(
  "Enter number of characters for password generation from range 10 to 64 to begin."
));
numberOfChars = numberOfChars + passwordCharLength;


if ((passwordCharLength) >= 10 && passwordCharLength <= 64) {
  lowerConfirm = confirm("would you like to use lowercase characters?");

  if (confirm("would you like to use upper case characters?")) {
    userChoiceArr = userChoiceArr.concat(upperCasedCharacters);
  }
  if (confirm("would you like to use special characters?")) {
    userChoiceArr = userChoiceArr.concat(specialCharacters);
  }
  if (confirm("would you like to use numeric characters?")) {
    userChoiceArr = userChoiceArr.concat(numericCharacters);
  } 
  console.log(userChoiceArr)

}

// Function to prompt user for password options
function getPasswordOptions() {}
// Function for getting a random element from an array
function getRandom() {}

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
