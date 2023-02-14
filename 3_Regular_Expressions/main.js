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

console.log(result4);
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
let result6 = quoteSample.match(vowelRegex);

console.log(result6);
// ================================================================
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result7 = quoteSample.match(alphabetRegex);

console.log(result7);
// ================================================================
// Crie um único regex que corresponda a um intervalo de letras entre h e s, e um intervalo de números entre 2 e 6. Lembre-se de incluir os sinalizadores apropriados no regex.
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/gi;
let result8 = quoteSample2.match(myRegex1);

console.log(result8);
// ================================================================
// Crie um único regex que corresponda a todos os caracteres que não sejam um número ou uma vogal. Lembre-se de incluir os sinalizadores apropriados no regex.
let quoteSample3 = "3 blind mice.";
let myRegex3 = /[^aeiou^0-9]/gi;
let result = quoteSample3.match(myRegex);

console.log(result);
// ================================================================
// Você deseja encontrar correspondências quando a letra socorre uma ou mais vezes em Mississippi. Escreva um regex que use o +sinal.
let difficultSpelling = "Mississippi";
let myRegex9 = /s+/g;
let result9 = difficultSpelling.match(myRegex);

console.log(result9);
// ================================================================
// Para este desafio, chewieQuotefoi inicializado como a string Aaaaaaaaaaaaaaaarrrgh!nos bastidores. Crie um regex chewieRegexque use o *caractere para corresponder a um caractere maiúsculo Aimediatamente seguido por zero ou mais acaracteres minúsculos em chewieQuote. Seu regex não precisa de sinalizadores ou classes de caracteres e não deve corresponder a nenhuma das outras aspas.
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh";
let chewieRegex = /Aa*/;
let result10 = chewieQuote.match(chewieRegex);

console.log(result10);
// ================================================================
// Corrija o regex /<.*>/para retornar a tag HTML <h1>e não o texto "<h1>Winter is coming</h1>". Lembre-se de que o curinga .em uma expressão regular corresponde a qualquer caractere.
let text = "<h1>Winter is coming</h1>";
let myRegexx = /<.*?>/;
let result11 = text.match(myRegex);

console.log(result11);
// ================================================================
// Mas ele não encontra correspondências nas seguintes strings, pois não há zcaracteres de letras:
let criminal = "abcabc";
let reCriminals = /C+/;
let result12 = criminal.match(reCriminals);

console.log(result12);
// ================================================================
// Use o caractere circunflexo em um regex para localizar Calapenas no início da string rickyAndCal.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result13 = calRegex.test(rickyAndCal);
// ================================================================
// Use o caractere âncora ( $) para corresponder à string cabooseno final da string caboose
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result14 = lastRegex.test(caboose);

console.log(result14);
