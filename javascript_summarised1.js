//in-line comments
console.log('hello world');

/*Data types and variables: undefined,null,boolean,string,symbol,number and object*/
    var myName = 'Tonye';
    let ourName = 'students';
    const pi = 3.14;

    var a;
    var b = 2;
    a = 7;
    b = a;
    console.log(a);
    console.log(b);

//remainder
    let remainder;
    remainder = 11 % 3;
    console.log(remainder + ' is a remainder');

//escaping strings - backslash
//  var myStr = 'i am a 'quoted' string inside'; //wrong
    var myStr = 'i am a \'quoted\' string inside'; //correct
    console.log(myStr);
//OR-you use single quotes with double quotes
    var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
    console.log(myStr);
//Other escape characters
    var myStr = 'Firstline\n\t\\Secondline\nThirdline';
    console.log(myStr);

//concatenating strings with variables
    var someAdjective = 'worthwhile';
    var mySentence = 'Learning to code is ';
    mySentence += someAdjective;
    console.log(mySentence);
//Find length of strings
    var lastName = 'Lovelace';
    console.log(lastName.length);
    console.log(lastName[2]);
    console.log(lastName[lastName.length - 1]);//to get the last letter of a string
    