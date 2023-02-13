let myString = "Hello, World!";
let myRegex = /Hello/;
let result1 = myRegex.test(myString);

console.log(result1);
// ================================================================
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result2 = waldoRegex.test(waldoIsHiding);

console.log(result2);
// ================================================================
// Conclua o regex petRegexpara corresponder aos animais de estimação dog, cat, birdou fish.
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;

let result3 = petRegex.test(petString);

console.log(result3);
// ================================================================
let myString1 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result4 = fccRegex.test(myString1);

console.log(result1);
// ================================================================
// Aplique o .match()método para extrair a string coding.
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result5 = extractStr.match(codingRegex);
// ================================================================
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let resulted = unRegex.test(exampleStr);
// ================================================================
// Use uma classe de caracteres com vogais ( a, e, i, o, u) em seu regex vowelRegexpara encontrar todas as vogais na string quoteSample.
// Observação: certifique-se de combinar as vogais maiúsculas e minúsculas.
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);

console.log(result);
