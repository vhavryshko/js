// 1. Create variables for each of the primitive data types (Number, String, Boolean, null, undefined, Symbol, BigInt) and print their types using the typeof operator
let number = 5;
let string = "Hello JS";
let bool = true;
let nullValue = null;
let undefindValue;
let symbol = Symbol("test");
let bigIntValue = 9007199254740991n;

console.log("1. Create variables for each of the primitive data types (Number, String, Boolean, null, undefined, Symbol, BigInt) and print their types using the typeof operator");

console.log("Type is " + typeof(number));
console.log("Type is " + typeof(string));
console.log("Type is " + typeof(bool));
console.log("Type is " + typeof(nullValue));
console.log("Type is " + typeof(undefindValue));
console.log("Type is " + typeof(symbol));
console.log("Type is " + typeof(bigIntValue));
console.log('--------------------------------------------------------------------------------------------------------------------------------');

// 2. Create three strings using single quotes, double quotes, and backticks.
// Use string methods to convert one of the strings to uppercase, another to lowercase, and check if the third contains a specific substring.

let singleString = 'Hello single quotes';
let doubleString = "Hello Double Quotes";
let backticksString = `Hello backticks quotes`;

console.log(`2. Create three strings using single quotes, double quotes, and backticks. Use string methods to convert one of the strings to uppercase, 
    another to lowercase, and check if the third contains a specific substring.`);

console.log(singleString);
console.log(singleString.toUpperCase());
console.log("");
console.log(doubleString);
console.log(doubleString.toLowerCase());
console.log("");
console.log(backticksString);
console.log("Does backticksString contain backticks word? - " + backticksString.includes("backticks"));
console.log('--------------------------------------------------------------------------------------------------------------------------------');

//3. Write a function that accepts a number and returns it as a string with two decimal places.
console.log('3. Write a function that accepts a number and returns it as a string with two decimal places.');

function numberConvertToString (number){

    return console.log(number.toFixed(2))
}

numberConvertToString(5);

console.log('--------------------------------------------------------------------------------------------------------------------------------');

//4. Create an object with properties for a book (title, author, year). Print each property using both dot notation and bracket notation.

let book = {
title:"The Lord of the Rings",
author:"John Ronald Reuel Tolkien",
year:"29 July 1954"
}

console.log('4. Create an object with properties for a book (title, author, year). Print each property using both dot notation and bracket notation.');

console.log(book.title, book.author, book.year);
console.log(book['author'], book['title'], book['year']);
console.log('--------------------------------------------------------------------------------------------------------------------------------');

//5. Create an array of five numbers, add a number to the end, remove the first number, and print the modified array.

let array = [34, 25, 88, 19, 57];

console.log('5. Create an array of five numbers, add a number to the end, remove the first number, and print the modified array.');

console.log("Initial array " + array);
array.push(99);
array.shift(0);
console.log("Modified array " + array);