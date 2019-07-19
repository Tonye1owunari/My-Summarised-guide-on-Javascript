//Use Destructuring assignment to pass an object as a function's parameter.

/*******
create strings using template literals.
template literals are a special kind of string that makes complex
strings easier. they're made with backticks( ` ).
*********/
const person = {
    name: 'Zoey',
    age: 18
};
const greeting = `Hello my name is ${person.name}! I am ${person.age} years old.`;
console.log(greeting);

/*********
Write concise object literal declaration using simple fields.
**************/
const createPerson1 = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
console.log(createPerson1('Zeoy',21,'female'));

//but the property and values are named the same.
//here's an easier way to do it:
const createPerson2 = (name, age, gender) => ( {name,age,gender} ); 
console.log(createPerson2('Biggie',14,'male'));

//Write concise declarative functions within an object:
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
bicycle.setGear(4);
console.log(bicycle.gear);

/************
Using class syntax to define a constructor function.
In ES6 you create objects using the 'class' keyword but
previously objects were created using 'new'.
************/
var spaceShuttle = function(targetPlanet, launchPlanet) {
    this.targetPlanet = targetPlanet;
    this.launchPlanet = launchPlanet;
}
var zeus = new spaceShuttle('Jupiter','Earth');
console.log(zeus);

//Using class keyword and constructor:
class Vegetable {
    constructor(name, nutrient){
        this.name = name;
        this.nutrient = nutrient;
    }
}
var carrot = new Vegetable('carrrot', 'vitamin A');
console.log(carrot.nutrient);

/***************
Use getters and setters to control access to an object.
Getter function gets private variable from an object to
the user without the user directly accessing the object.
===================================================
N/B: ( _variable) setting a variable with an underscore indicates
that it's a private variable and you're not supposed to access
it ouside of it's class.
*************/
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = Math.round(5/9 * (temp - 32))+'˚C';
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp + '˚C';
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(78);
console.log(thermos);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 43;
temp = thermos.temperature;
console.log(temp);

/*****************
The difference between IMPORT and REQUIRE.
In the past the require function was used to import
external files but now we have import and export.
*****************/
    /*import {capitalizeString} from './string_function'
        const cap = capitalizeString('hello');
        console.log(cap); */

//Use export to reuse a code block.

//Import everything like so:
    /*import * as capitalizeString from 'string_function';
        const cap = capitalizeString('hello');
        console.log(cap); */

/******************
fallback export/default export:
export default ...

importing a fallback export:
import ... from ...

N/B: no curly braces this time.
*************/






//THE END!!!
