//Object Record Collection--coding challenge.
var collection = {
    '2548': {
        'album':'Slippery when wet',
        'artist':'Bon Jovi',
        'tracks':['Let it rock','You give love a bad name']
    },
    '2468': {
        'album':'1999',
        'artist':'Prince',
        'tracks':['1999','Little red carvette']
    },
    '1245': {
        'artist':'Robert Palmer',
        'tracks':[]
    },
    '5439': {
        'album':'ABBA Gold',
    }
};
//Keep a copy of the collection for test
var collectionCopy = JSON.parse(JSON.stringify(collection));
console.log(collectionCopy);

//A function that updates the record.
function updateRecord(id, prop, value) {
    if (value === '') {
        delete collection[id][prop];
    }else if (prop === 'tracks') {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else {
        collection[id][prop] = value;
    }
    return JSON.parse(JSON.stringify(collection));
}

updateRecord('2468','tracks','test');
console.log(updateRecord('5439','artist','ABBA'));

// ITERATE WITH WHILE LOOPS
//Loops allow you run code multiple times.
var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

/********
FOR LOOPS
for (initialization; condition; code) {}
for (var i = 0; i < 5; i++) {}
*********/
let thisArray = [];
for (let i = 1; i < 6; i++) {
    thisArray.push(i);
}
console.log(thisArray);

//iterating even numbers with a for loop.
let ourArray = [];
for (let i = 0; i < 10; i+=2) {
    ourArray.push(i);
}
console.log(ourArray);

//count backwards with for loop.
let theArray = [];
for (var i = 0; i < 5; i++) {
    theArray.unshift(i);
}
console.log(theArray);
//OR
let numArray = [];
for (var i = 10; i > 0; i--) {
    numArray.push(i);
}
console.log(numArray);

//Iterating through an array with for loop.
var testArray = [2,3,4,5,6];
var total = 0;

for (var i = 0; i < testArray.length; i++) {
   total += testArray[i];
}
console.log(total);

//Nested for loops.
var product = [[1,2], [3,4], [5,6,7]];
var multiply = 1;
for (var i=0; i < product.length; i++) {
    for (var j=0; j < product[i].length; j++) {
        multiply *= product[i][j];
    }
}
console.log(multiply);

//testing foreach to do the same multiplying task
var times = 1;
product.forEach(element =>{
    element.forEach(each =>{
        times *= each;
    });
});
console.log(times);

//listing out each product element using foreach.
product.forEach(element =>{
    element.forEach(each =>{
        console.log(each);
    });
});

//ITERATING WITH DO...WHILE LOOPS.
let anArray = [];
var i = 6;
do {
    anArray.push(i);
    i++;
} while (i < 5)

console.log(anArray);
