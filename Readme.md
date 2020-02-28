# Assingment 3  

# Create a random password generator. The criteria included; 
* Choosing a random letter with uppercase 
* Choosing a random letter with lowercase 
* Choosing a random number 
* Choosing a random symbol 
* Using the selcted criteria create a random password, to be displayed in the html box. 

# Jargon 
* Key objects of the password = (lower, upper, number, symbol, length)

# Step 1 - Creating a random generator for the criteria. 

# Part A - Create getRandomLower Fucntion. 
 This must include the .fromCharCode  property which returns the unicode character code of the key,  triggered by a onkeypress event. 

* This must also incldue math.random() to choose a random number between 1 and 26. We add 97 because thats where the letter "a" begins in the browser chart. 

* This must also include math.floor() to round down to the nearest whole number. 

# Part B - Create getRandomUpper function. 
* This must include a charCode. 
* This step must include math.random() and math.floor(); The browser code begins at 65, this is the where the lowercase letters begin. 

# Part C - Create getRandomNumber.
* This must include a charCode. 
* This step must include math.random() and math.floor(); The browser code begins at 45, this is where the numbers start on the browser chart set. We use 10 because there are ten numbers. 

# Part D - Create getRandomSymbol.
* This must include a charCode. 
* This step must include math.random() and math.floor(); We use .length to iterate through the string of symbols. 

# Step 2 - Define Varibales 

* Document.getElementById Gets the password id from html and renames it resultEL. 
* Document.getElementById gets the "generate" id from html and names in generateEl. 

# Step 3 - Create key objects for the randomFunc

* Changes the function elements from getRandomLower to lower, getRandomNumber to number, etc. 

# Step 4 - Create event listeners to trigger functions when the user clicks generate password. 

# Step 5 - Create a function to execute the prompts. 
 
# Step 6 -  Assign prompts to to each of the key objects. 

# Step 7 -  Assign ResultEL.inner text to the generatePassword function. 
Use the key objects of the password, as argummnets.  

# Step 8 -  Open the generatePassword function. 

# Step 9 - Create a new varibale called generatedPassword using the let keyword. 
Set it equal to an empty string. This is because we are going to use the random func and funcName functions to generate a password. We will need somewhere to store the generatedPassword. 

# Step 10 - Create a a vairable called typesCount and set it equal the key objects of the password.This is going to be used to check which key objects the user selects for the password. 

# Step 11 - Create an array called types Arr. 
* Make the elements in the array are the key objects for the password. 
* Use curly braces to make each element in the array an object. This array will use booleans to check which objects of the password have been selected by the user. 
* Add the filter() method. The filter() method creates an array filled with array elements that pass a test. If the user selects uppercase it will = true. If the user does not select lowercase it will = false. 

* item => Object.values(item)[0]); is the function that will run the true or false test for all key objects of the password. If the user doesn't select on of the key objects it will = false and be filtered out of the array. It will start at the first element in the array. 

# Step 12 - Create a if statement to stop the function if there is no password criteria selected. 
Return nothing if this is the case. 

# Step 13 - Create a for loop,  to loop through the types array and call the generator function for each type. 
 * This is to Loop through the types array, and pass the key element objects through. 
 * Use the forEach() method to loop through the types array. 
 * The function we will use in the forEach() is const funcName = Object.keys(type)[0];
 * This is because we want to find the lowercase, upper and symbol objects that the user chose within the types array. To generate the password. 

#Step 13 - Intitliaize the generatedPassword string.Add the randomFunc variable and add the funcname as a key. This sets the generatedPassword = to key obects of the password that the user selected. 

# Step 14 - Create an if statment to ensure that the password is above 8 characters and below 128 characters. 
Use the isValid key and set is = false to ensure if it is not between 8-128, it alterts to choose a number between 8 - 128. 

# Step 15 - Create a const called finalPassword. 
Set it equal to generatedPassword. Use slice to return the key objects selected in the typesArr. Set it to 0, so it starts at the first element, use length to record how long password is. If the user selcted 20 characters print a 20 character password. 

# Step 16 - Return final Password. This returns final password from the generator functions wich gets put into the results. 



