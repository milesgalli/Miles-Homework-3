
const resultEl = document.getElementById("Password"); 
const generateEl= document.getElementById("generate");
// Ask the user the for generation criteria that they would like ?

const randomFunc ={
  lower: getRandomLower, 
  upper: getRandomUpper, 
  number:getRandomNumber, 
  symbol: getRandomSymbol
};

generateEl.addEventListener('click', ()=> {

var length = prompt("how long do you want you ");
var hasLower = confirm (" lowercase");
var hasUpper = confirm( " Uppercase"); 
var hasNumber = confirm(" number ");
var hasSymbol = confirm("symbol "); 

resultEl.innerText = generatePassword(
  hasLower,
  hasUpper,
  hasNumber,
  hasSymbol, 
  length
  );
});

// Random Function Object 
// Changing variable names, getRandomLower become lower 


// listening for a click, when that happens going to use an arrows function. Once this is clicked need to value of these events 
// currently it will be a string, this has to be a number. We do this by add +. so lengthEL.value become +lenghtEl.value 




//console.log(hasLower,hasUpper,hasNumber,hasSymbol);






// Generate password function 
// random generator function  
function generatePassword (lower, upper, number, symbol, length){
   

//1 init password varibale 
//2 filter out not selcted variables 
//3 loop over the length for each variable 
// 4 add the final pasward to the password variable and return it

// allows user to fill the empty array 

let generatedPassword = ''; 
const typesCount = lower + upper + number + symbol; 

//console.log ('typesCount', typesCount);

// use curly braces to make each element in the array an object. ex lower ; true, upper ; true etc 

//.filter is used to filter out the elements that are not included in the selection criteria 

// loop through each item using item => to filter out any value that is false.

// use object.value pass and item in the array through. if it not included it is filtered out of the array

const typesArr = [{lower},{upper},{number},{symbol}].filter
(item => Object.values(item)[0]);

// if none selected needs to stop
if( typesCount === false){
  return '';
}

//  types arr loops throight the type arr array to find the selected variables 
// the result gets stored in funcname 
  for(let i = 0; i<length; i += typesCount ){
    typesArr.forEach(type => {
    const funcName = Object.keys(type)[0];

    //upper lower etc 
    generatedPassword += randomFunc[funcName](); 
    });
  }
const finalPassword = generatedPassword.slice(0, length);

return finalPassword; 


}



// step 1 random generator for criteria. 
// 16 characters in the aplhabet, 97 is starting counter. You add the amount of characters to that string 
// The charCode property returns the Unicode character code of the key that triggered the onkeypress event.

function getRandomLower (){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}
function getRandomUpper (){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}
function getRandomNumber (){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol (){
  const symbols = "!@#$%^&*(){}[]=<>/," 
  return symbols[Math.floor(Math.random()*symbols.length)];
  
}
//console.log(getRandomLower());
// console.log(getRandomUpper());
// console.log(getRandomNumber());
// console.log(getRandomSymbol());

