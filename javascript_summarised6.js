//PROFILE LOOKUP-- coding challenge.
//an array of objects.

var contacts = [
    {
        'firstName':'Akira',
        'lastName':'Laine',
        'number':'08048783985',
        'likes':['Pizza','Coding','Brownie']
    },
    {
        'firstName':'Harry',
        'lastName':'Potter',
        'number':'08144893783',
        'likes':['Wonds','Magic','Hogwarts']            
    },
    {
        'firstName':'Sherlock',
        'lastName':'Holmes',
        'number':'07048783985',
        'likes':['Mentalism','Violin']           
    },
    {
        'firstName':'Tamunotonye',
        'lastName':'Owunari',
        'number':'unknown',
        'likes':['Javascript','Coding','You']            
    }
];

function lookUpProfile(name,prop) {
    for (i=0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || 'No such property';
        }
    }
    return 'No such contact';
}
console.log(lookUpProfile('Tamunotonye','lastName'));
console.log(lookUpProfile('Tamunotonye','age'));
console.log(lookUpProfile('Sarah','lastName'));
console.log(lookUpProfile('Sherlock','number'));

/**********
Generate Random Fractions-- using Math.random()
without a value it would generate random numbers
ie decimals between 0 and 1 only.
=================================================
But we can also generate random whole numbers, Here's how!
use--Math.floor().

Math.floor(Math.random() * 20);
this code gives us random whole numbers between 0 & 20 not including 20 itself.
******************/

let randomWholeNumber = Math.floor(Math.random() * 20);
console.log(randomWholeNumber);

//Generating Random Numbers within a Given Range.

let randomNumber = Math.floor(Math.random() * 30) + 50;
console.log(randomNumber);

//This function does the same thing better.

function randomRange(myMin,myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(5,15));

//Use the parseInt()--turns string to integer.
console.log('56 is a string');
console.log(parseInt('56'));

//Use the parseInt() with a Radix--specifies the base of the number in a string e.g base 2.

console.log(parseInt('10111', 2));

//Use the conditional(ternary) Operator.
//You can replace a block of if/else statement using a chain of ternary statements. Here's how it looks!
// condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) {
    return a === b ? true : false;
}
console.log(checkEqual(1, 2));

//Multiple ternary operators--can be nested.

function checkSign(num) {
    return num > 0 ? 'positive' : num < 0 ? 'negative': 'zero';
}
console.log(checkSign(0));
console.log(checkSign(-2));
console.log(checkSign(4));

//Using const to define arrays and objects will not stop them from being mutated.
// Object.freeze() -- makes your object immutable.

const MATH_CONSTANT = {PI: 3.14};
Object.freeze(MATH_CONSTANT);
MATH_CONSTANT.PI = 99;  //wouldn't assign 99 anymore.
console.log(MATH_CONSTANT);
