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
//================================================
