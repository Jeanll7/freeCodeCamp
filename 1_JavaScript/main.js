let myVar = 87;
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
const lastName2 = "Lovelace";

lastNameLength = lastName2.length;

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
//================================================
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
const myArray0 = ["jelly", 8, "bread"];

console.log(myArray0);
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
const myArray8 = [
  ["John", 23],
  ["cat", 2],
];

const removedFromMyArray = myArray5.pop();

console.log(removedFromMyArray);
console.log(myArray8);
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
//================================================
const myList = [
  ["leite", 3],
  ["Iogurte", 5],
  ["Pão", 9],
  ["Frutas", 12],
  ["Granola", 1],
];

console.log(myList);
//================================================
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();
//================================================
function functionWithArgs(one, two) {
  console.log(one + two);
}

functionWithArgs(1, 2);
functionWithArgs(7, 9);
//================================================
function timesFive(num) {
  return num * 5;
}

const answer = timesFive(5);
console.log(answer);
//================================================
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
//================================================
function myLocalScope() {
  let myVar = "foo";

  console.log(myVar);
}
myLocalScope();
//================================================
const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater";

  return outerWear;
}

myOutfit();
console.log(myOutfit());
//================================================
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5;
}

addThree();
addFive();

console.log(addThree());
console.log(addFive());
//================================================
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
console.log(processed);
// ================================================
function nextInLine(arr, item) {
  arr.push(item);
  const removed = arr.shift();

  return removed;
}
let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
//================================================
function welcomeToBooleans() {
  return true;
}

console.log(welcomeToBooleans());
//================================================
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

console.log(trueOrFalse(true));
console.log(trueOrFalse(false));
//================================================
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

console.log(testEqual());
//================================================
function testStrict(val) {
  if (val === 7) {
    return "igual";
  }
  return "Não igual";
}

testStrict(10);
console.log(testStrict());
//================================================
function compareEquality(a, b) {
  if (a === b) {
    return "igual";
  }
  return "Not Equal";
}

compareEquality(10, "10");
console.log(compareEquality());
//================================================
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));
//================================================
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Não é igual a 10";
  } else {
    return "Igual a 10";
  }
}

console.log(testStrictNotEqual(10));
//================================================
function testGreaterThan(val) {
  if (val > 100) {
    return "sobre 100";
  }
  if (val > 10) {
    return "sobre 10";
  }
  return "10 ou abaixo";
}

console.log(testGreaterThan(10));
//================================================
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }
  if (val >= 10) {
    return "10 or Over";
  }
  return "Less than 10";
}

console.log(testGreaterOrEqual(10));
//================================================
function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }
  if (val < 55) {
    return "Under 55";
  }
  return "55 or Over";
}

console.log(testLessThan(10));
//================================================
function testLogicalAnd(val) {
  if (val > 25 && val < 50) {
    return "Yes";
  }
  return "No";
}

console.log(testLogicalAnd(10));
//================================================
function testLogicalOr(val) {
  if (val > 20 || val < 10) {
    return "Outside";
  }
  return "Inside";
}

console.log(testLogicalOr(15));
//================================================
function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  return result;
}

console.log(testElse(4));
//================================================
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10 == maior que 10";
  } else if (val < 5) {
    return "Smaller than 5 == menor que 5";
  } else {
    return "Between 5 and 10 == entre 5 e 10";
  }
}

console.log(testElseIf(7));
//================================================
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(7));
//================================================
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

console.log(testSize(7));
//================================================
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // if (strokes == 1) {
  //   return names[0];
  // } else if (strokes <= par - 2) {
  //   return names[1];
  // } else if (strokes === par - 1) {
  //   return names[2];
  // } else if (strokes === par) {
  //   return names[3];
  // } else if (strokes === par + 1) {
  //   return names[4];
  // } else if (strokes === par + 2) {
  //   return names[5];
  // } else {
  //   return names[6];
  // }
  return strokes === 1
    ? names[0]
    : strokes <= par - 2 // else if (strokes <= par - 2)
    ? names[1]
    : strokes === par - 1
    ? names[2]
    : strokes === par
    ? names[3]
    : strokes === par + 1
    ? names[4]
    : strokes === par + 2
    ? names[5]
    : names[6];
}

console.log(golfScore(5, 4));
//================================================
function caseInSwitch(val) {
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }
}

console.log(caseInSwitch(1));
//================================================
function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

console.log(switchOfStuff(1));
//================================================
function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
      break;
  }
  return answer;
}

console.log(sequentialSizes(1));
//================================================
function chainToSwitch(val) {
  let answer = "";

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case "John":
      answer = "";
      break;
    case 156:
      answer = "";
      break;
    default:
      answer = "Ate Nine";
  }
  return answer;
}

console.log(chainToSwitch(1));
//================================================
function isLess(a, b) {
  return a < b;
}

console.log(isLess(10, 15));
//================================================
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2));
//================================================
function abTestAcima(a, b) {
  return a < 0 || b < 0
    ? undefined
    : Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTestAcima(2, 2));
//================================================
let count = 0;
function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc("K"));
console.log(cc("A"));
//================================================
let count1 = 0;

function ck(card1) {
  if (card1 <= 6) count1++;
  else if (card1 >= "10") count1--;
  return count1 + (count1 > 0 ? " Bet" : " Hold");
}
console.log(ck(2));
console.log(ck(3));
console.log(ck(7));
console.log(ck("K"));
console.log(ck("A"));
//================================================
const myDog3 = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  friends: ["Water", "Dogs"],
};

console.log(myDog3);
//================================================
const testObjj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

const hatValue = testObjj.hat;
const shirtValue = testObjj.shirt;

console.log(hatValue);
console.log(shirtValue);
// ================================================
const testObj1 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

const entreeValue = testObj1["an entree"];
const drinkValue = testObj1["the drink"];

console.log(entreeValue);
console.log(drinkValue);
//================================================
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

const playerNumber = 16;
const player = testObj[playerNumber];
console.log(player);
//================================================
const myDog1 = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog1.name = "Happy Coder";
console.log(myDog1.name);
//================================================
const myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp"],
};

myDog["bark"] = "woof!";
console.log(myDog);
//================================================
const myDog2 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};
//================================================
const myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};

delete myDog.tails;
console.log(myDog);
//================================================
function phoneticLookup(val) {
  let result = "";

  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = lookup[val];
  return result;
}
//================================================
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

function checkObj1(obj, checkProp) {
  return obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found";
}
//================================================
const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Jean leal",
    title: "main",
    release_year: 2022,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
];
// ================================================
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

let gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);
//================================================
const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];

console.log(myPlants[1].list[1]);
//================================================
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (
    prop == "tracks" &&
    value !== "" &&
    records[id].hasOwnProperty("tracks") === false
  ) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
//================================================
const myArray5 = [];

let i = 5;
while (i >= 0) {
  myArray5.push(i);
  i--;
}

console.log(myArray5);
//================================================
const myArray9 = [];

for (let i = 1; i < 6; i++) {
  myArray.push(i);
}

console.log(myArray9);
//================================================
const ourArray = [];

for (let i = 1; i < 10; i += 2) {
  ourArray.push(i);
}
console.log(ourArray);
//================================================
const myArray10 = [];

for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

console.log(myArray10);
//================================================
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total);
//================================================
function multiplyAll(arr) {
  let product = 1;

  return product;
}

const arr = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
//================================================
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  return product;
}

console.log(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ])
);
//================================================
const myArray = [];
let j = 10;

while (j < 5) {
  myArray.push(j);
  j++;
}
