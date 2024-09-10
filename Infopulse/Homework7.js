// Write a function combineArrays that takes two arrays and returns a new array containing all the elements of both arrays using the ...

console.log('Write a function combineArrays that takes two arrays and returns a new array containing all the elements of both arrays using the ...');

let array1 = [11, 22, 33, 44];
let array2 = [55, 66, 77, 88];

function combineArrays (arr1, arr2){

    let combineArray = [...arr1, ...arr2];
    console.log('Combined array is ' + combineArray);
}

console.log('First array is ' + array1);
console.log('Second array is ' + array2);
combineArrays(array1, array2);

console.log('------------------------------------------------');

// Create a function sumAll that accepts any number of arguments using the and returns their sum.

console.log('Create a function sumAll that accepts any number of arguments using the and returns their sum.');

function sumAll(...numbers) {
    return numbers.reduce((acc, item) => acc + item, 0);
}

console.log('All numbers sum is ' + sumAll(22, 33, 44, 55));

console.log('------------------------------------------------');

// Write a function safeParseJSON that accepts a JSON string and tries to parse it. If parsing fails, it should return an error message instead of throwing an error.

console.log('Write a function safeParseJSON that accepts a JSON string and tries to parse it. If parsing fails, it should return an error message instead of throwing an error.');

let jsonString = '{"key" : "value"}';

function safeParseJSON(string) {
    
        try {
            let parsedString = JSON.parse(string);
            console.log('Parsed JSON is');
            console.log(parsedString);
            
        } catch (error) {
            console.log('Initial string is not a JSON format');
        }

}

console.log('Initial string is ' + jsonString);
safeParseJSON(jsonString);

console.log('------------------------------------------------');

// Write a function validateAge that accepts an age as an argument. If the age is less than 18, throw an error with a custom message. Handle the error using try...catch.

console.log('Write a function validateAge that accepts an age as an argument. If the age is less than 18, throw an error with a custom message. Handle the error using try...catch.');

let personAge = 18

function validateAge(age) {
    


        try {
            if (age < 18) {

                throw new Error("U're not adult enough");
                
            }

            return "Congratulations u're adult " + age

        } catch (error) {

            console.log(error);
        }
    
}

        console.log(validateAge(personAge));

console.log('------------------------------------------------');