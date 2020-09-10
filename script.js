// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Example of a CSS change using javascript
  document.getElementById('password').style.backgroundColor = "#99FF99";

  passwordText.value = password;

}

function generatePassword() {

  let pwBase = "";
  let newPW = "";

  

  var pwLength = parseInt(document.getElementById("size").value);

 
  var charTypes = "";
  if (document.getElementById('L').checked) pwBase += 'abcdefghijklmnopqrstuvwxyz';
  if (document.getElementById('U').checked) pwBase += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (document.getElementById('N').checked) pwBase += '0123456789';
  if (document.getElementById('S').checked) pwBase += '!@#$%^&*()_+=?/.<,;:{}[]|';


  for (let i=0; i<pwLength; i++) {
    
    let randomIndex = Math.floor(Math.random()*pwBase.length);
   
    let theLetter = pwBase[randomIndex];
    newPW += theLetter;
  }

 
  return newPW;

}


generateBtn.addEventListener("click", writePassword);