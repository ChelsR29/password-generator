// variables
var passLength;
var passGen = [];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = lowerCase.map(item=> item.toUpperCase());
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '<', ',', '>', '.', '?', '/', ';', ':', '[', ']', '}', '{', '`', '~']
var generateBtn = document.querySelector("#generate");
var yesLower;
var yesUpper;
var yesNumbers;
var yesSpecial;

// function for writePassword
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function for generatePassword
function generatePassword() {
  
  var passLength = window.prompt("How many characters? Choose between 8 and 128");

// prompts
  if (passLength < 8 || passLength > 128) {
    alert("Please choose between 8 and 128 characters.")
    return "try again";
   } else { 
    yesLower = confirm("Do you want to include lowercase characters?");
    yesUpper = confirm("Do you want to include uppercase characters?");
    yesNumbers = confirm("Do you want to include numbers?");
    yesSpecial = confirm("Do you want to include special characters?");
  };
 
// if statement to have criteria match the password generated
  if (!yesLower && !yesUpper && !yesNumbers && !yesSpecial) {
    return "please pick one of the four criteria";
  } 

  if (yesLower && yesUpper && yesNumbers && yesSpecial) {
    passGen = passGen.concat(lowerCase, upperCase, numbers, special);
  } 
  
  if (yesLower) {
    passGen = passGen.concat(lowerCase);
  }

  if (yesUpper) {
    passGen = passGen.concat(upperCase);
  }

  if (yesNumbers) {
    passGen = passGen.concat(numbers);
  }

  if (yesSpecial) {
    passGen = passGen.concat(special);
  };

// generate random password  
  var password = "";
  
  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * passGen.length);
    password = password + passGen[randomIndex];
   
  }

// added string because once yes is chosen for a confirm, criteria will not be removed when geneerate button is pressed again, unless paged is refreshed (could not figure out how to fix)
    return password + " (please refresh page to change criteria)";
}

