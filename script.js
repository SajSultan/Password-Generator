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



let lowerConfirm;
let upperConfirm;
let specialConfirm;
let numericConfirm;
 



// Function to prompt user for password options
function getPasswordOptions() {
  // 1. make variable for user chosen criteria empty array.
  let userChoiceArr =[];
  //2. Prompt user for password character length.
  passwordCharLength = (prompt(
    "Enter number of characters for password generation from range 10 to 64 to begin."
  ));
  // 3. Create if statement for matching and choosing criteria to push to new array.
  if ((passwordCharLength) >= 10 && passwordCharLength <= 64) {
    confirm("would you like to use lowercase characters?");
    userChoiceArr = userChoiceArr.concat(lowerCasedCharacters);
  // 3.a. concat user choice of arrays to make a new array
    if (confirm("would you like to use upper case characters?")) {
      userChoiceArr = userChoiceArr.concat(upperCasedCharacters);
    } //3.b.  concat user choice of arrays to make a new array
    if (confirm("would you like to use special characters?")) {
      userChoiceArr = userChoiceArr.concat(specialCharacters);
    } //3.c.  concat user choice of arrays to make a new array
    if (confirm("would you like to use numeric characters?")) {
      userChoiceArr = userChoiceArr.concat(numericCharacters);
      // 3.d. concat user choice of arrays to make a new array
    } else {
      (confirm("Please choose a number and characters to use for your password")) 
        getPasswordOptions(prompt);
        // need to fix
      }
    }  
  }


getPasswordOptions();




// Function for getting a random element from an array.
function getRandom() {
let randomsArray = [];
for(let i = 0; i < numberOfChars.length; i++) {
  randomsArray = Math.floor(Math.random()* userChoiceArr.length);
  randomsArray += userChoiceArr[randomsArray]
}
  return randomsArray;
  console.log(getRandom)

}

// Function to generate password with user input
function generatePassword() {}
password = "";


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
