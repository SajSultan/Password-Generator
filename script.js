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

let userChoiceSorted = [];
let userChoiceArr = [];

let passwordCharLength;

// Function to prompt user for password options
function getPasswordOptions() {
  // 1. make variable for user chosen criteria empty array.

  //2. Prompt user for password character length.
  passwordCharLength = parseInt(
    prompt(
      "Enter number of characters for password generation from range 10 to 64 to begin."
    )
  );
  // if (isNaN(passwordCharLength)) {
  //   alert(
  //     "You must choose a value between 10 to 64 and a minimum of 1 of the corresponding character choices to generate a pasword?"
  //   );

  // 3. Create if statement for matching and choosing criteria to push to new array.

  let lowerConfirm = confirm("would you like to use lowercase characters?");
  let upperConfirm = confirm("would you like to use uppercase characters?");
  let specialConfirm = confirm("would you like to use special characters?");
  let numericConfirm = confirm("would you like to use numeric characters?");
  if (lowerConfirm) {
    userChoiceArr.push(lowerCasedCharacters);
  }

  if (upperConfirm) {
    userChoiceArr.push(upperCasedCharacters);
  }

  if (specialConfirm) {
    userChoiceArr.push(specialCharacters);
  }

  if (numericConfirm) {
    userChoiceArr.push(numericCharacters);
  }

  console.log(userChoiceArr);
  console.log(getRandom(userChoiceArr)) ;
}



//Function for getting a random element from an array.
getPasswordOptions();
function getRandom(array){
 return array[Math.floor(Math.random() * array.length)]



}
//Function to generate password with user input
function generatePassword() {
let password = "";

  
}

// // Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {

//   const password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
