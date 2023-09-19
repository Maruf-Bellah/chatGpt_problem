//1======= Hello, World!: Create a JavaScript program that prints "Hello, World!" to the console.

console.log('Hello, World!')

// 2=========Variables and Data Types:

// Declare a variable and store your name in it. Print it to the console.
// Declare a variable and store your age in it. Print it to the console.
// Declare a variable with a string value and another with a numeric value. Try to perform arithmetic operations on them and print the results.

var strName = 'Maruf ';

var age = 20; 

var str = 'Ayesha'
var num = 30;

var anotherNum = age + num;
// console.log(anotherNum);

var nameConcate = strName + str;
var conCate = strName.concat(str)


// console.log(nameConcate);
// console.log(conCate);



// 3===User Input: 
// Create a program that asks the user for their name and then prints a greeting to the console

// var prom = prompt('What is your Name ?' )
// console.log('Well Come to' + ' '+  prom);



// 4===Conditional Statements:
// Write a program that checks if a number is greater than 10 and prints a message accordingly.
// Create a program that determines if a person is eligible to vote based on their age.



var myArray = [12,2,3,4,5,6,7,8,9,12,56,78,95,65,4,55,63,25,56,10];


for(let my of myArray){
    if(myArray[my] > 10){
        console.log('these number greter then 10 '+'= '+ myArray[my]);
    }
}

var ageMane = age > 18 ? 'He is eligible to vote ' : 'he is not eligibel to vote ';
console.log(ageMane);

// 5======Loops:
// Write a program that prints the numbers from 1 to 10 using a for loop.
// Create a program that prints even numbers from 1 to 20 using a while loop.
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// var text = '';
var i = 1;
while(i <= 20){
    if(i % 2 == 0){
        console.log(i);
    }
    i++
}
// console.log(text);
// 6=======Arrays:

// Declare an array of your favorite fruits and print them one by one using a loop.
// Write a program that finds the largest number in an array of numbers.

var fruits = ['mango', 'banana', 'jackfruit', 'lemon', 'papiya'];

for(let fruit of fruits){
    console.log(fruit);
}

var largest = [52,6,5,9,8,9,7,85,46,55,46,54,5,5,4,5,4,52,65,96,89,52,52,1];


var showLarger = 0;
for(let i = 0; i< largest.length; i++){
    if(largest[i] > showLarger){
        showLarger = largest[i];
    }
}
console.log(showLarger);


// 7===Functions:
// Create a function that calculates the square of a number and returns the result.
// Write a function that checks if a given string is a palindrome (reads the same forwards and backward).


function myFunc(){
    const paw = Math.pow(5,2);
    console.log(paw);
    return paw;
}
myFunc()





// 8===Objects:
// Create an object representing a person with properties like name, age, and city. Print these properties to the console.
// Write a program that counts the number of keys in an object.

const person = {
    name: 'Maruf',
    age : 20,
    city: 'Dhaka',
    natinality: 'Bangladeshi'
}

let count = 0;
for(let per in person){
    ++count;
}

console.log(count);


// String Manipulation:
// Write a program that takes a sentence as input and counts the number of words in it.
// Create a program that converts a given string to uppercase.

function clickMe(){
    let count = document.getElementById('text').value;
    console.log(count.length);
    const uper = count.toUpperCase();
    console.log(uper);
    count = ' ';
}


// 10=============DOM Manipulation:
// Create a simple HTML page with a button. Write JavaScript code to display an alert when the button is clicked.
// Change the background color of a webpage when a button is clicked.


function dom(){
    document.body.style.backgroundColor = 'red'
    alert('Well come to problem solving');
}

