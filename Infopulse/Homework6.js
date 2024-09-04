// Create an object named user that stores information such as name, age, and gender. Add a method greet to the object that logs a greeting message including the user's name.
console.log('Create an object named user that stores information such as name, age, and gender. Add a method greet to the object that logs a greeting message including the users name.');

let user = {
    name: 'Vadym',
    age: 33,
    gender: 'male',
    greet: function(){
        console.log(`Hello dear ${this.name}!`)}  
    
};

user.greet();

console.log('----------------------------------------------------');

// Create an object and make a shallow copy of it using both Object.assign and the spread operator (...). Modify the properties in the cloned object and check if the original object remains unchanged.
console.log('Create an object and make a shallow copy of it using both Object.assign and the spread operator (...). Modify the properties in the cloned object and check if the original object remains unchanged.');

let userWithDots = {...user};
let userCopyAssign = {};

Object.assign(userCopyAssign, user);

console.log('Initial object is');
console.log(user);

user.name = 'Alex';
user.age = 20;
user.gender = 'female';

console.log('Initial object with changed name property is');
console.log(user);
console.log(`Object copy with ... is`);
console.log(userWithDots);
console.log(`Object copy with Object.assign is `);
console.log(userCopyAssign);
console.log('----------------------------------------------------');

// Use a for...in loop to iterate over the properties of an object and log each key and value to the console.

console.log('Use a for...in loop to iterate over the properties of an object and log each key and value to the console.');

for (const key in user) {
   console.log(`${key} : ${user[key]}`);
}

console.log('----------------------------------------------------');

// Given an array of user objects, use the map method to create a new array containing just the names of the users.

console.log('Given an array of user objects, use the map method to create a new array containing just the names of the users.');

let users = [user, userWithDots, userCopyAssign]
    
let names = users.map(user => user.name);

console.log(names);
console.log('----------------------------------------------------');