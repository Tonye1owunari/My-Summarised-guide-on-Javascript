function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = '';
    result += 'The ' + myAdjective + ' ' + myNoun + ' ' + myVerb + '\nto the store ' + myAdverb;
    return result;
}
console.log(wordBlanks('dog','big','ran','quickly'));
console.log(wordBlanks('lady','pretty','walked','gracefully'));

//ARRAYS
var ourArray = ['Quincy', 1];
//nested arrays
var myArray = [['Bulls', 23], ['Dogs', 15]];
//accessing array data
console.log(ourArray[0]);
//modifying array
ourArray[1] = 45;
console.log(ourArray);
//accessing nested arrays data
var myArray = [['Bulls', 23], ['Dogs', 15], ['Bats', 4]];
console.log(myArray[1][0]);
//manipulating arrays with push--add to end
var myArray = [['Bulls', 23], ['Dogs', 15], ['Bats', 4]];
myArray.push(['Cats', 17]);
console.log(myArray);
//manipulating arrays with pop--removelast
var myArray = [['Bulls', 23], ['Dogs', 15], ['Bats', 4]];
myArray.pop();
console.log(myArray);
//manipulating arrays with shift--removefirst
var myArray = [['Bulls', 23], ['Dogs', 15], ['Bats', 4]];
myArray.shift();
console.log(myArray);
//manipulating arrays with unshift--add to beginning
var myArray = [['Bulls', 23], ['Dogs', 15], ['Bats', 4]];
myArray.shift();
myArray.unshift(['Apes', 30]);
console.log(myArray);

//shopping list
var myList = [['cereal', 3], ['milk', 2], ['bananas', 3], ['juice', 2], ['eggs', 12]];

//FUNCTIONS--reusable code
function ourReusableFunction() {
    console.log('Heyya, world!');
}
ourReusableFunction();
ourReusableFunction();
//Passing values to functions
function functionWithArgs(num1, num2) {
    console.log(num1 + num2);
}
functionWithArgs(12, 23);
//global scope--variables declared outside a function can be accessed by the entire code.
//local scope--variables decleared within a function can be accessed only by the function.

//Using return statements
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));
//storing return values in variables
var processed = 0;
function processArg(numb) {
    return (numb + 3) / 5;
}
processed = processArg(27);
console.log(processed);

//stand in line
let theArray = [1,2,3,4,5];
function nextInline(arr,item) {
    theArray.push(item);
    return theArray.shift();
}
console.log('before, theArray contained ' + JSON.stringify(theArray));
console.log(nextInline(theArray,6));
console.log('Now, theArray contains ' + JSON.stringify(theArray));
console.log(nextInline(theArray,7));
console.log('Now, theArray contains ' + JSON.stringify(theArray));
