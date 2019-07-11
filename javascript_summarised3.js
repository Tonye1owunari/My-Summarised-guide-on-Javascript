//Boolean values--true or false

//conditional statements--if, else and else if.
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue == true) {
        return 'Yes, that was true.';
    }
    return 'No, that wasnt true.';
}
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

/*****
strict equality operator(===)
3 == 3 and 3 == '3' both evaluates to true because it doesnt care about the data type but...
3 === 3 and 3 === '3' evaluates to false because it does.
*****/

//inequality operator
function testNotEqual(value) {
    if (value != 5) {
        return 'value does not equal five';
    }else {
        return 'value equals five';
    }
}
console.log(testNotEqual(20));
console.log(testNotEqual(5));
//Operators are: ==, !=, >, <, >=, <=, &&, || .

//and operator &&
function testLogicalAnd(val) {
    if (val >= 25 && val <= 50) {
        return 'The value falls between 25 to 50';
    }else{
        return 'The value does not fall between 25 to 50';
    }
}
console.log(testLogicalAnd(30));
console.log(testLogicalAnd(62));

//Or operator ||
function testLogicalOr(numb) {
    if (numb == 79 || numb == 99) {
        return 'The number is either 79 or 99';
    }else if (numb <= 79) {
        return 'The number is less than 79';
    }else{
        return 'The number is greater than 79 and is neither 79 nor 99';
    }
}
console.log(testLogicalOr(99));
console.log(testLogicalOr(82));
console.log(testLogicalOr(79));
console.log(testLogicalOr(68));

//SWITCH STATEMENTS--instead of using if statements
function caseInSwitch(arg) {
    var answer = '';
    switch(arg) {
        case 'a':
          answer = 'alpha';
          break;
        case 2:
          answer = 'beta';
          break;
        case 3:
          answer = 'gamma';
          break;
        case 4:
          answer = 'delta';
          break;
        default: //like an else statement
          answer = 'no predefined case for this value';
          break;
    }
    return answer;
}
console.log(caseInSwitch('a'));
console.log(caseInSwitch(2));
console.log(caseInSwitch(6));
