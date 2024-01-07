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

// Function to prompt user for password options

function getPasswordOptions() {
  var passwordLength = prompt(
    "Please enter your password length (8-128 characters)"
  );

  // validate password length
  if (
    passwordLength < 8 ||
    passwordLength > 128 ||
    isNaN(passwordLength) === true
  ) {
    alert("Please enter a valid password length (8-128 characters)");
    return getPasswordOptions();
  }

  var includeLowercase = confirm("Include lower case characters?");
  var includeUppercase = confirm("Include upper case characters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters? ($@%&*, etc)");

  if (
    !(includeLowercase || includeUppercase || includeNumbers || includeSpecial)
  ) {
    alert("Please select at least one charcter type.");
    return getPasswordOptions();
  }

  return {
    length: parseInt(passwordLength),
    lowercase: includeLowercase,
    uppercase: includeUppercase,
    numeric: includeNumbers,
    special: includeSpecial,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  for (var i = 0; i < arr.length; i++) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomElement = arr[randomIndex];
    return randomElement;
  }
}

// Function to generate password with user input
function generatePassword() {
  userOptions = getPasswordOptions();

  if (userOptions) {
    var selectedCharsets = "";

    if (userOptions.lowercase)
      selectedCharsets += lowerCasedCharacters.join("");
    if (userOptions.uppercase)
      selectedCharsets += upperCasedCharacters.join("");
    if (userOptions.numeric) selectedCharsets += numericCharacters.join("");
    if (userOptions.special) selectedCharsets += specialCharacters.join("");
  }

  var randomPassword = "";

  for (let i = 0; i < userOptions.length; i++) {
    randomPassword += getRandom(selectedCharsets);
  }

  return randomPassword;
}

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
