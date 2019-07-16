//Multiple options in switch statements
function vowelChecker(letter) {
    let result = '';
    switch(letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          result = 'Vowel';
          break;
        default:
          result = 'Consonant';
          break;
    }
    return result;
}
console.log(vowelChecker('e'));
console.log(vowelChecker('h'));

//OBJECTS--are not accessed with index(arrays) but accessed by properties.
//They contain property/value pairs.
var myDog = {
    'name': 'Target',
    'legs': 3,
    'tails': 1,
    'friends': [],
};
//accessing property value using dot notation.
var dogName = myDog.name;
var dogLegs = myDog.legs;
console.log(dogName);
console.log(dogLegs);
//accessing property value using bracket notation.
var dogTail = myDog['tails'];
var dogFriend = myDog['friends'];
console.log(dogTail);
console.log(dogFriend);
//Updating object properties.
myDog.legs = 4;
console.log(myDog.legs);

//Adding New Properties(you can use dot/bracket notation)
var theDog = {
    'name': 'Bray',
    'legs': 4,
    'tails': 1,
    'friends': ['alot'],
};
console.log(theDog);    //before adding
theDog.bark = 'wof-wof';
console.log(theDog);    //after
//Delete properties from object
delete theDog.friends;
console.log(theDog);

//Check if an object has a certain property--hasOwnProperty
var myObj = {
    gift: 'pony',
    pet: 'rabbit',
    bed: 'soft'
};
function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    }else {
        return 'Not found';
    }
}
console.log(checkObj('gift'));
console.log(checkObj('bag'));

//Accessing Nested objects.
let myStore = {
    'car': {
        'inside': {
            'glove_box': 'maps',
            'back_seat': 'crumbs'
        },
        'outside': {
            'trunk': 'spanner'
        }
    },
    'trouser': {}
};
let gloveBoxContent = myStore.car.inside.glove_box;
console.log(gloveBoxContent);

//Accessing objects in arrays and vice versa.
var myPlants = [
    {
        type: 'flowers',
        list: ['rose','tulip','hibiscus']
    },
    {
        type: 'trees',
        list: ['fir','pine','oak']
    }
];
var thirdTree = myPlants[1].list[2];
console.log(thirdTree);