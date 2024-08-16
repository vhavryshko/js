// 1. Write a program that checks whether a number is positive, negative, or zero using the if...else statement

// let number = -13456;

// if (number > 0) console.log("Number is positive");
// else if (number < 0) console.log("Number is negative");
// else if (number = 0)console.log("Number is zero");
// else console.log("Entered value is not number");

// console.log("-------------------------------------------");

// 2. Use a for loop to print the multiplication table for numbers from 1 to 10.

// let result;

// for (let i = 1; i <= 10; i++){

// console.log("-----------");

//     for (let j = 1; j <= 10; j++){

//         result = i * j;
//         console.log(`${i} * ${j} = ${result}`);
//     }
// }

// console.log("-------------------------------------------");

// 3. Write a program that uses a while loop to print all even numbers from 1 to 20.

// let evenNumber = 1;

// while (evenNumber <= 20){

//     if (evenNumber % 2 == 0) console.log(`The number ${evenNumber} is even`);
//     evenNumber++;
// }

// console.log("-------------------------------------------");

// 4. Use a switch statement to print the name of the day of the week based on a number (1 for Monday, 7 for Sunday).

// let monthIndex = 5;

// switch (monthIndex) {

//     case 1:
//         console.log("You chose Monday");
//         break;
//     case 2:
//         console.log("You chose Tuesday");
//         break;
//     case 3:
//         console.log("You chose Wednesday");
//         break;
//     case 4:
//         console.log("You chose Thursday");
//         break;
//     case 5:
//         console.log("You chose Friday");
//         break;
//     case 6:
//         console.log("You chose Saturday");
//         break;
//     case 7:
//         console.log("You chose Sunday");
//         break;
//     default:
//         console.log(`You chose wrong day index ${monthIndex}`);
// }

// console.log("-------------------------------------------");

// 5. Write a program that uses a do...while loop to calculate the sum of numbers from 1 to 100.

let numbersSum  = 0;
let i = 1;

do {
    numbersSum += i;
    i++;
}
while (i <= 100);

console.log(`The sum of given numbers is ${numbersSum}`);