let myVar = 87;

// myVar = myVar + 1;
myVar++;

console.log(myVar); // Result = 88
//================================================
let myVar01 = 11;

// myVar01 = myVar01 - 1;
myVar01--;

console.log(myVar01); // Result = 10
//================================================
const ourDecimal = 5.7;

let myDecimal = 6.6;
//================================================
const quotient = 4.4 / 2; // Result = 2.2

console.log(quotient);
//================================================
const remainder = 11 % 3;

console.log(remainder);
//================================================
let a = 3;
let b = 17;

a += 12;
b += 9;

console.log(a, b);
//================================================
const myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>';

console.log(myStr1);
//================================================
const myStr = "FirstLine\nSecondLine\nThirdLine";

console.log(myStr);
//================================================
const myStr3 = "I come first." + " I come second";

console.log(myStr3);
//================================================
let myStr4 = "This is the first sentence. ";
myStr4 += "This is the second sentence.";

console.log(myStr4);
//================================================
const myName = "Jean";
const myStr5 = "My name is " + myName + " and I am well!";

console.log(myStr5);
//================================================
const someAdjective = "string";
let myStr6 = "Learning to code is ";
myStr6 += someAdjective;

console.log(myStr6);
//================================================
let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

console.log(lastNameLength);
//================================================
let firstLetterOfLastName = "";
const lastName1 = "Lovelace";

firstLetterOfLastName = lastName1[0]; // Change this line

console.log(firstLetterOfLastName);
//================================================
let myStr7 = "Jello World";

myStr7 = "Hello World";
myStr7[0];

console.log(myStr7);
//================================================
const lastName8 = "Lovelace";

const lastLetterOfLastName = lastName8[lastName8.length - 1];

console.log(lastLetterOfLastName);
