// Write a function getFirstElement that takes an array and returns its first element. If the array is empty, the function should return undefined.

console.log("//Write a function getFirstElement that takes an array and returns its first element. If the array is empty, the function should return undefined.");

let array = [55, 3, 567, 335, 99];
let emptyArray = [];

function getFirstElement(array) {

    return array[0];
}

console.log("Initial array " + initialArrayDuplicates);
console.log("First value of initial array is " + getFirstElement(initialArrayDuplicates));
console.log("Initial empty array " + emptyArray);
console.log("First value of initial array is " + getFirstElement(emptyArray));
console.log("-------------------------------------------------");

// Write a function sumArray that takes an array of numbers and returns the sum of all elements in the array

console.log("//Write a function sumArray that takes an array of numbers and returns the sum of all elements in the array");

let sum = 0;
function sumArray(array) {

    for (let i = 0; i < array.length; i++) {

        sum += array[i]
    }
    return sum;
}

console.log("Initial array " + initialArrayDuplicates);
console.log("The sum of initial array is " + sumArray(initialArrayDuplicates));
console.log("-------------------------------------------------");

// Write a function reverseArray that takes an array and returns a new array with the elements in reverse order

console.log("//Write a function reverseArray that takes an array and returns a new array with the elements in reverse order");

let initialArray = [1, 2, 3, 4, 5]
let reverseArray1 = initialArray.splice();

function getReverseArray(array) {

    for (let i = 0; i < array.length / 2; i++) {


        reverseArray1[i] = array[array.length - i - 1]

        reverseArray1[array.length - i - 1] = array[i]

    }

    return reverseArray1;
}

console.log("Initial array is " + initialArray);
console.log("Reverse array is " + getReverseArray(initialArray));
console.log("---------------------------------");

// Write a function filterEvenNumbers that takes an array of numbers and returns a new array containing only even numbers.

console.log("//Write a function filterEvenNumbers that takes an array of numbers and returns a new array containing only even numbers.");

let arrayEvenInitNumbers = [1, 2, 3, 4];

function filterEvenNumbers(array) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] % 2 != 0) {

            array.splice(i, 1);
        }
    }

    return array;
}

console.log("Initial array is " + arrayEvenInitNumbers);
console.log("Filtered array is " + filterEvenNumbers(arrayEvenInitNumbers));
console.log("---------------------------------");

// Write a function removeDuplicates that takes an array and returns a new array with all duplicate elements removed.

console.log("//Write a function removeDuplicates that takes an array and returns a new array with all duplicate elements removed.");

let arrayWithDuplicates = [1, 2, 3, 1, 3, 4, 7];

function removeDuplicates(array) {

    return array.filter((value, index) => array.indexOf(value) === index);
}

console.log("Initial array is " + arrayWithDuplicates);
console.log("Array without duplicates " + removeDuplicates(arrayWithDuplicates));