// Scroll down to bottom to find Step 1 !!

// Step 2 Define Variables  
const resultEl = document.getElementById("Password"); 
const generateEl= document.getElementById("generate");

// Step 3 Create Key objects for randomFunc Function 
const randomFunc ={
  lower: getRandomLower, 
  upper: getRandomUpper, 
  number:getRandomNumber, 
  symbol: getRandomSymbol
};

// Step 4 - Create event listeners when user clicks generate password. 
// Step 5 - create a function to execute the prompts.
// Step 6 -  Assign prompts to to each of the key objects. 
generateEl.addEventListener('click', ()=> {


var length = prompt("How many characters do you want your password to be ? ");
var hasLower = confirm (" Would you like to include  a lowercase letter ?");
var hasUpper = confirm( " Would you like to include  a uppercase letter ? "); 
var hasNumber = confirm(" Would you like to include  a number ? ");
var hasSymbol = confirm(" Would you like to include  a symbol ? "); 

// Step 7 -  Assign ResultEL.inner text to the generatePassword function. 
resultEl.innerText = generatePassword( hasLower,hasUpper,hasNumber, hasSymbol, length
  );
});

// Step 8 - Open the generate Password function. 
function generatePassword (lower, upper, number, symbol, length){
   
// Step 9 - Create a new varibale called generatedPassword using the let keyword
// Step 10 - Create a a vairable called typesCount and set it equal to the key objects of the password. 
let generatedPassword = ''; 
const typesCount = lower + upper + number + symbol;

// Step 11 - Create an array called types Arr. 
const typesArr = [{lower},{upper},{number},{symbol}].filter
(item => Object.values(item)[0]);


// Step 12 - Create a if statement to stop the function if there is no password criteria selected.
if( typesCount === false){
  return '';

}
 //Step 13 - Create a for loop to find the filtered variables in the typesArr Function.
  for(let i = 0; i<length; i += typesCount ){
    typesArr.forEach(type => {
    const funcName = Object.keys(type)[0];

   // Intitliaize the generatedPassword string.
    generatedPassword += randomFunc[funcName](); 
    });
  }

  // Create an if statment to ensure that the password is above 8 characters and below 128 characters
if(generatedPassword.length < 8 || generatedPassword.length > 128 ){
isValid = false; 
alert("Please choose a number between 8 and 120 !")
}else{

// Create a const called finalPassword. 
const finalPassword = generatedPassword.slice(0, length);

// Step 16 - Return final Password.
return finalPassword; 


}}



// Step 1 - Create a random generator fucntion. 
// Part A
function getRandomLower (){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}
// Part B
function getRandomUpper (){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}
// Part C
function getRandomNumber (){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// Part D
function getRandomSymbol (){
  const symbols = "!@#$%^&*(){}[]=<>/," 
  return symbols[Math.floor(Math.random()*symbols.length)];
  
}

