// Write a function that takes an array as input and returns the array reversed. Avoid using the built-in reverse method.

console.log('Write a function that takes an array as input and returns the array reversed. Avoid using the built-in reverse method.');

let initialArray = [1, 2, 3, 4, 5];

function getReverseArray(array) {

    let arrayReverse = [];

    for (let i = array.length - 1; i >= 0; i--) {

        arrayReverse.push(array[i]);
    }

    return arrayReverse;

}

console.log('Initial array is: ' + initialArray);
console.log('Reversed array is: ' + getReverseArray(initialArray));
console.log('-------------------------------------');

// Given an array of numbers, write a function to find and return the maximum number in the array.

console.log('Given an array of numbers, write a function to find and return the maximum number in the array.');

let initialArrayForGetMax = [1, 2, 333, 4, 5];

function getMaxArrayNumber(array) {

    let maxArrayNumber = 0;

    for (let i = 0; i <= array.length - 1; i++) {

        if (array[i] > maxArrayNumber) {

            maxArrayNumber = array[i];
        };
    }

    return maxArrayNumber;
}

console.log('Initial array is: ' + initialArrayForGetMax);
console.log('Maximum number is : ' + getMaxArrayNumber(initialArrayForGetMax));
console.log('-------------------------------------');

// Write a function that removes duplicate elements from an array and returns the new array with only unique elements.

console.log('Write a function that removes duplicate elements from an array and returns the new array with only unique elements.');

let initialArrayDuplicates = [5, 1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(array) {
    let uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false;


        for (let j = 0; j < uniqueArray.length; j++) {
            if (array[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }


        if (!isDuplicate) {
            uniqueArray.push(array[i]);
        }
    }

    return uniqueArray;
}

console.log('Initial array is: ' + initialArrayDuplicates);
console.log('Array without duplicates is: ' + removeDuplicates(initialArrayDuplicates));
console.log('-------------------------------------');

// Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).

console.log('Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).');

let initialWord = 'oko';

function isWordPalindrome(word){

    let inverseWord = word.split('').reverse().join('');

        if (initialWord == inverseWord) console.log(`Initial word ${initialWord} is palindrome`);
        else console.log(`Initial word ${initialWord} is not palindrome`);

}


isWordPalindrome(initialWord);
console.log('-------------------------------------');

// Implement a function that checks if two strings are anagrams (contain the same characters in different orders).

console.log('Implement a function that checks if two strings are anagrams (contain the same characters in different orders).');

let firsWord = 'Silent';
let secondWord = 'Listen';


function isWordsAnagrams(first,second){

    if (first.length == second.length)
    {
        let firstWordSorted = first.toLowerCase().split('').sort().join('');
        let secondWordSorted = second.toLowerCase().split('').sort().join('');

            if (firstWordSorted == secondWordSorted) console.log(`${first} and ${second} words are anagrams`);
            else console.log(`${first} and ${second} words are not anagrams`);

    }
    else console.log(`${first} and ${second} words have different characters number so they cant be anagrams`);

}

    isWordsAnagrams(firsWord,secondWord);
    console.log('-------------------------------------');

// Write a function that finds and returns the first non-repeating character in a string.

console.log('Write a function that finds and returns the first non-repeating character in a string.');

let nonrepeatingWord = "abbcacdffffgg";

function getFirstNonrepeatingChar(word) {

    console.log('Input string is: ' + word);
    let splitWord = word.split('');
    let isRepetead;

    for (let i = 0; i < splitWord.length; i++) {

        isRepetead = false;

        for (let j = 0; j < splitWord.length; j++) {

            if (i == j);
            else if (splitWord[i] == splitWord[j]) {
                isRepetead = true;
                break;
            }

        }

        if (isRepetead == false) {
            console.log('First non-repeating character in the string is: ' + splitWord[i]);
            break;
        }
        
    }
    if (isRepetead == true) console.log(`${nonrepeatingWord} string doesn't contain non-repeating character`);

}

getFirstNonrepeatingChar(nonrepeatingWord);
