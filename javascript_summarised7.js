//Use arrow functions to write concise anonymous functions.
//anonymous functions dont have names and can be assigned to variables.
var magic = function() {
    return new Data();
};

//converting the above function to an arrow function, it should look like this:
const magics = () => new Data();

//Arrow functions with parameters.
const myConcat = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

//Higher order arrow functions: map, filter and reduce.
/*****
map, filter and reduce take functions as arguments for processing
data collections. So when one function takes another as an argument
its best to use arrow functions to ensure clean coding.
*******/

//setting default function parameter values.
const increment = (number, increaseBy = 1) => number + increaseBy;
console.log(increment(5, 2));
console.log(increment(5));

/******
using rest operator with functions.
Rest operator allows you create a function that takes a
variable number of arguments. it is three dots(...)
********/
function sum(x, y, z) {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));

//Modifying the above function with a rest operator(still works the same!).
function add(...myArray) {
    //const myArray = [x, y, z]; don't need this anymore
    return myArray.reduce((a, b) => a + b, 0);
}
console.log(add(1, 2, 3, 4, 5, 6, 7));

/**********
Use the spread operator to evaluate arrays in-place.
it looks like the rest operator(...) but it out an existing array
into it's individual parts.
************/
const array1 = ['JAN','FEB','MAR','APR','MAY'];
let array2;
(function() {
array2 = [...array1];
array1[0] = 'potato'
})();
console.log(array2);

/*****
Use destructuring assignment to assign variables from objects.
destructuring assignment is an assignment that neatly takes objects values
and assign them to a variable.
******/
var voxel = {x: 3.6, y: 7.4, z: 6.54};

//the old way of assigning object values to variables:
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

//using destructuring assignment: const {objproperty : variable,...} = object;
const {x:a, y:b, z:c} = voxel;   //a = 3.6, b = 7.4, c = 6.54
console.log(a);
console.log(b);
console.log(c);

//Using destructuring to get the average temperature for tommorrow:
const AVG_TEMPERATURE = {
today: 77.5,
tommorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
const {tommorrow : tempOfTommorrow} = avgTemperatures;
return tempOfTommorrow + '˚C';
}
console.log(getTempOfTmrw(AVG_TEMPERATURE));

//Destructuring assignments with nested objects:
const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tommorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
    const {tommorrow : {max : maxOfTommorrow}} = forecast;
    return maxOfTommorrow + '˚C';
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

/********
Using destructuring assignment to assign variables from
arrays.
Unlike objects destructuring, in arrays you cannot specify which
value goes to a variable. they go in the order of the array.
********/

const [g, h, , , j] = [1, 2, 3, 4, 5];
console.log(g, h, j);

//switching variable places with destructuring:
let s = 8, r = 6;
console.log(s, r);
[s, r] = [r, s];
console.log(s, r);

//using destructuring with rest operator:
const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {
    const [ , , ...arr] = list;
    return arr;
}
console.log(source);
console.log(removeFirstTwo(source));