// Definimos uma variável chamada yourArray. Complete a instrução atribuindo uma matriz de pelo menos 5 elementos de comprimento à yourArray variável. Sua matriz deve conter pelo menos uma string , um número e um booleano .
let yourArray = ["a", 2, true, "c", null, { name: "john" }];

console.table(yourArray);
// ================================================================
// Para completar este desafio, defina a 2ª posição (índice 1) de myArray como quiser, além da letra b.
let myArray = ["a", "b", "c", "d"];

myArray[1] = "anything we want";
console.table(myArray);
// ================================================================
// Definimos uma função, mixedNumbers, para a qual estamos passando um array como argumento. Modifique a função usando push()e unshift()para adicionar 'I', 2, 'three'ao início da matriz e 7, 'VIII', 9 ao final para que a matriz retornada contenha representações dos números de 1 a 9 em ordem.
function mixedNumbers(arr) {
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));
// ================================================================
// Definimos uma função, popShift, que recebe um array como argumento e retorna um novo array. Modifique a função, usando pop()e shift(), para remover o primeiro e o último elemento da matriz de argumentos e atribua os elementos removidos às suas variáveis ​​correspondentes, para que a matriz retornada contenha seus valores.
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

console.table(popShift(["challenge", "is", "not", "complete"]));
// ================================================================
// Inicializamos um array arr. Use splice()para remover elementos de arr, para que ele contenha apenas elementos que somam o valor de 10.
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
let newArray = arr.splice(1, 4);

console.log(arr);
// ================================================================
// Definimos uma função, htmlColorNames, que recebe uma matriz de cores HTML como argumento. Modifique a função usando splice()para remover os dois primeiros elementos da matriz e adicione 'DarkSalmon'e 'BlanchedAlmond'em seus respectivos lugares.
function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);
// ================================================================
// Definimos uma função, forecast, que recebe um array como argumento. Modifique a função usando slice() para extrair informações da matriz de argumentos e retornar uma nova matriz que contém os elementos de string warme sunny.
function forecast(arr) {
  return arr.slice(2, 4);
}

console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
// ================================================================
// Definimos uma função, copyMachineque recebe arr(uma matriz) e num(um número) como argumentos. A função deve retornar uma nova matriz composta de numcópias de arr. Fizemos a maior parte do trabalho para você, mas ainda não está funcionando direito. Modifique a função usando a sintaxe de propagação para que funcione corretamente (dica: outro método que já abordamos pode ser útil aqui!).
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
