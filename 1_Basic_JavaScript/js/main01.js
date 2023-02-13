// Use a notação de colchetes para localizar o penúltimo caractere na lastNamestring.
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

console.log(secondToLastLetterOfLastName);
//================================================
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks =
  myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb + "."; // dog big ran quickly.
// const wordBlanks = `${myNoun} ${myAdjective} ${myVerb} ${myAdverb}.`;

console.log(wordBlanks);
//================================================
const myArray = ["jelly", 8, "bread"];

console.log(myArray);
//================================================
// Você também pode aninhar arrays dentro de outros arrays
const myArray1 = [
  ["Bulls", 23],
  [45, "White Sox"],
];

console.log(myArray1);
//================================================
const myArray2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray2[2][1];

console.log(myData);
//================================================
const myArray4 = [
  ["John", 23],
  ["cat", 2],
];

myArray4.push(["dog", 3]);

console.log(myArray4);
//================================================
const myArray5 = [
  ["John", 23],
  ["cat", 2],
];

const removedFromMyArray = myArray5.pop();

console.log(removedFromMyArray);
console.log(myArray5);
//================================================
const myArray6 = [
  ["John", 23],
  ["dog", 3],
];

const removedFromMyArray1 = myArray6.shift();

console.log(myArray6);
console.log(removedFromMyArray1);
//================================================
const myArray7 = [
  ["John", 23],
  ["dog", 3],
];
myArray7.shift();

myArray7.unshift(["Paul", 35]);

console.log(myArray7);
