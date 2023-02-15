function hello(name) {
  let welcome = `Bem-vindo ${name}`;
  write(welcome, 1);
}

function write(phrase, type) {
  switch (type) {
    case 1:
      console.log(phrase);
      break;
    case 2:
      alert(phrase);
    default:
      document.write(phrase);
  }
}

hello("Jean");
// ================================================================
// Use o console.log()método para imprimir o valor da variável aonde anotado no código.
let a = 5;
let b = 1;
a++;

let sumAB = a + b;
console.log(a);
// ================================================================
// Depois disso, use console.log para registrar a outputvariável. Visualize os dois consoles para ver o log. Por fim, use console.clear após seu log para limpar o console do navegador. Veja a diferença nos dois consoles.
let output =
  "Get this to show once in the freeCodeCamp console and not at all in the browser console";

console.log(output);
console.clear();
// ================================================================
// Adicione duas console.log() instruções para verificar typeof cada uma das duas variáveis seven​​e threeno código.
let seven = 7;
let three = "3";
console.log(typeof seven);
console.log(typeof three);
// ================================================================
// Corrija os dois erros ortográficos no código para que o netWorkingCapitalcálculo funcione.
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
// ================================================================
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);
// ================================================================
// Corrija a string para que ela use aspas diferentes para o href valor ou escape das existentes. Mantenha as aspas duplas em toda a string.
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);
// ================================================================
// Corrija a condição para que o programa execute a ramificação correta e o valor apropriado seja atribuído a result.
let x = 7;
let y = 9;
let result = "to come";

// if (x == y) {
//   result = "Equal!";
// } else {
//   result = "Not equal!";
// }
// console.log(result);

result = x == y ? "Equal!" : "Not equal!";

console.log(result);
// ================================================================
// Corrija o código para que a variável result seja definida com o valor retornado da chamada da função getNine.
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result1 = getNine();
console.log(result1);
// ================================================================
// A função raiseToPowereleva uma base a um expoente. Infelizmente, não é chamado corretamente - corrija o código para que o valor powerseja o 8 esperado.
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
// ================================================================
// Corrija os dois erros de indexação na função a seguir para que todos os números de 1 a 5 sejam impressos no console.
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;

  for (let i = 0; i < len; i++) {
    console.log(firstFive[i]);
  }
}

countToFive();
// ================================================================
// A função a seguir deve criar uma matriz bidimensional com mlinhas e ncolunas de zeros. Infelizmente, não está produzindo a saída esperada porque a rowvariável não está sendo reinicializada (definida como uma matriz vazia) no loop externo. Corrija o código para que ele retorne uma matriz 3x2 correta de zeros, que se parece com [[0, 0], [0, 0], [0, 0]].
function zeroArray(m, n) {
  let newArray = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
// ================================================================
